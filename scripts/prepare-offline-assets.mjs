import fs from "node:fs/promises"
import path from "node:path"

const root = process.cwd()

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(src, dest)
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true })
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      await copyDir(from, to)
    } else if (entry.isFile()) {
      await copyFile(from, to)
    }
  }
}

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

const staticVendor = path.join(root, "quartz", "static", "vendor")

await copyFile(
  path.join(root, "node_modules", "katex", "dist", "katex.min.css"),
  path.join(staticVendor, "katex", "katex.min.css"),
)
await copyDir(
  path.join(root, "node_modules", "katex", "dist", "fonts"),
  path.join(staticVendor, "katex", "fonts"),
)
await copyFile(
  path.join(root, "node_modules", "katex", "dist", "contrib", "copy-tex.min.js"),
  path.join(staticVendor, "katex", "contrib", "copy-tex.min.js"),
)

const mermaidCandidates = [
  path.join(root, "node_modules", "mermaid", "dist", "mermaid.esm.min.mjs"),
  path.join(root, "node_modules", "mermaid", "dist", "mermaid.esm.mjs"),
]
const mermaidSource = (await Promise.all(mermaidCandidates.map(exists))).findIndex(Boolean)

if (mermaidSource === -1) {
  throw new Error(
    "Mermaid is required for a fully offline build. Install it with `npm install mermaid --save` and rerun `npm run prepare:offline`.",
  )
}

await copyFile(
  mermaidCandidates[mermaidSource],
  path.join(staticVendor, "mermaid", "mermaid.esm.min.mjs"),
)
await copyDir(
  path.join(root, "node_modules", "mermaid", "dist", "chunks", "mermaid.esm.min"),
  path.join(staticVendor, "mermaid", "chunks", "mermaid.esm.min"),
)

console.log("Offline vendor assets copied into quartz/static/vendor.")
