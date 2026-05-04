import fs from "node:fs/promises"
import path from "node:path"

const sourceArg = process.argv[2] ?? "../CompSci_UCB"
const targetArg = process.argv[3] ?? "content"
const sourceDir = path.resolve(process.cwd(), sourceArg)
const targetDir = path.resolve(process.cwd(), targetArg)
const ignoredDirs = new Set([".obsidian", ".github", "private", "templates"])

function isSafeTarget(targetPath) {
  const normalized = path.normalize(targetPath)
  return normalized.endsWith(path.normalize("\\quartz\\content"))
}

function parseFrontmatter(contents) {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return match?.[1] ?? null
}

function shouldPublishMarkdown(contents) {
  const frontmatter = parseFrontmatter(contents)
  if (!frontmatter) return false
  return /^\s*publish:\s*true\s*$/im.test(frontmatter)
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) {
      continue
    }

    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }

    if (entry.isFile()) {
      files.push(fullPath)
    }
  }

  return files
}

if (!isSafeTarget(targetDir)) {
  throw new Error(`Refusing to write outside quartz/content: ${targetDir}`)
}

const allFiles = await walk(sourceDir)
await fs.mkdir(targetDir, { recursive: true })

let publishedMarkdown = 0
let copiedMarkdown = 0
let removedFiles = 0
const desiredFiles = new Set()

async function hasSameContents(sourcePath, destinationPath) {
  try {
    const [sourceContents, destinationContents] = await Promise.all([
      fs.readFile(sourcePath),
      fs.readFile(destinationPath),
    ])

    return sourceContents.equals(destinationContents)
  } catch {
    return false
  }
}

async function copyFilePreservingTimes(sourcePath, destinationPath) {
  await fs.mkdir(path.dirname(destinationPath), { recursive: true })
  await fs.copyFile(sourcePath, destinationPath)

  const sourceStats = await fs.stat(sourcePath)
  await fs.utimes(destinationPath, sourceStats.atime, sourceStats.mtime)
}

async function removeStaleFiles(dir, desired) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      await removeStaleFiles(fullPath, desired)

      const remainingEntries = await fs.readdir(fullPath)
      if (remainingEntries.length === 0) {
        await fs.rmdir(fullPath)
      }

      continue
    }

    if (entry.isFile() && !desired.has(fullPath)) {
      await fs.rm(fullPath)
      removedFiles += 1
    }
  }
}

for (const filePath of allFiles) {
  const relativePath = path.relative(sourceDir, filePath)
  const destinationPath = path.join(targetDir, relativePath)
  const extension = path.extname(filePath).toLowerCase()

  if (extension === ".md") {
    const contents = await fs.readFile(filePath, "utf8")
    if (!shouldPublishMarkdown(contents)) {
      continue
    }

    desiredFiles.add(destinationPath)
    publishedMarkdown += 1

    if (await hasSameContents(filePath, destinationPath)) {
      continue
    }

    await copyFilePreservingTimes(filePath, destinationPath)
    copiedMarkdown += 1
  }
}

await removeStaleFiles(targetDir, desiredFiles)

console.log(
  `Exported ${publishedMarkdown} published markdown files to ${targetDir} (${copiedMarkdown} copied, ${removedFiles} removed)`,
)
