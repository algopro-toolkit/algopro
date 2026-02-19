import { spawn, spawnSync } from "node:child_process";

const timeoutMs = Number(process.env.BUILD_TIMEOUT_MS || 300000);
const killGraceMs = Number(process.env.BUILD_KILL_GRACE_MS || 3000);

const cleanupCommands = [
  ["pkill", ["-f", "/node_modules/.bin/vite build"]],
  ["pkill", ["-f", "npm run build"]],
  ["pkill", ["-f", "npm run clean-build"]],
];

for (const [cmd, args] of cleanupCommands) {
  spawnSync(cmd, args, { stdio: "ignore" });
}

const child = spawn("npx", ["vite", "build"], {
  stdio: "inherit",
  detached: true,
  env: { ...process.env, NODE_OPTIONS: "--max-old-space-size=4096" },
});

let timedOut = false;
let forceKillTimer;

const killProcessTree = (signal) => {
  if (!child.pid) return;

  spawnSync("pkill", ["-P", String(child.pid)], { stdio: "ignore" });

  try {
    process.kill(-child.pid, signal);
  } catch {}

  try {
    process.kill(child.pid, signal);
  } catch {}
};

const timeoutTimer = setTimeout(() => {
  timedOut = true;
  killProcessTree("SIGTERM");

  forceKillTimer = setTimeout(() => {
    killProcessTree("SIGKILL");
  }, killGraceMs);
}, timeoutMs);

child.on("exit", (code, signal) => {
  clearTimeout(timeoutTimer);
  if (forceKillTimer) clearTimeout(forceKillTimer);

  if (timedOut) {
    console.error(`\nBuild timed out after ${timeoutMs}ms.`);
    process.exit(124);
  }

  if (signal) {
    process.exit(1);
  }

  process.exit(code ?? 1);
});

child.on("error", () => {
  clearTimeout(timeoutTimer);
  if (forceKillTimer) clearTimeout(forceKillTimer);
  process.exit(1);
});

process.on("SIGINT", () => {
  killProcessTree("SIGTERM");
  process.exit(130);
});

process.on("SIGTERM", () => {
  killProcessTree("SIGTERM");
  process.exit(143);
});
