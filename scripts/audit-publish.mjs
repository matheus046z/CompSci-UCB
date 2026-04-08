import fs from "node:fs/promises"
import path from "node:path"

const sourceArg = process.argv[2] ?? "../CompSci_UCB"
const sourceDir = path.resolve(process.cwd(), sourceArg)

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.name === ".obsidian" || entry.name === ".github") {
      continue
    }

    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath)
    }
  }

  return files
}

function hasPublishFlag(contents) {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return false
  return /^\s*publish:\s*true\s*$/im.test(match[1])
}

function relative(filePath) {
  return path.relative(sourceDir, filePath).replaceAll("\\", "/")
}

const markdownFiles = await walk(sourceDir)
const published = []

for (const filePath of markdownFiles) {
  const contents = await fs.readFile(filePath, "utf8")
  if (hasPublishFlag(contents)) {
    published.push(filePath)
  }
}

console.log(`Source: ${sourceDir}`)
console.log(`Markdown files: ${markdownFiles.length}`)
console.log(`Published notes: ${published.length}`)

const rootIndexPath = path.join(sourceDir, "index.md")
let hasPublishedIndex = false

try {
  const indexContents = await fs.readFile(rootIndexPath, "utf8")
  hasPublishedIndex = hasPublishFlag(indexContents)
} catch {
  hasPublishedIndex = false
}

if (published.length === 0) {
  console.log("\nNo notes with `publish: true` were found.")
}

if (!hasPublishedIndex) {
  console.log("\nMissing published root `index.md`.")
  console.log("Quartz expects ../CompSci_UCB/index.md with `publish: true` for the home page.")
}

if (published.length > 0) {
  console.log("\nPublished notes:")
  for (const filePath of published.slice(0, 20)) {
    console.log(`- ${relative(filePath)}`)
  }

  if (published.length > 20) {
    console.log(`- ...and ${published.length - 20} more`)
  }
}
