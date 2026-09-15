import { spawn } from "node:child_process"

process.env.QUARTZ_OFFLINE = "1"

const child = spawn(process.execPath, ["quartz/bootstrap-cli.mjs", "build", "-d", "content"], {
  env: process.env,
  stdio: "inherit",
})

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
  } else {
    process.exit(code ?? 1)
  }
})
