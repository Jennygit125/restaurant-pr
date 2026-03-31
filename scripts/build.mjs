import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const distDir = path.join(rootDir, "dist");
const webpackCliPath = path.join(
  rootDir,
  "node_modules",
  "webpack-cli",
  "bin",
  "cli.js",
);

const bundleResult = spawnSync(process.execPath, [webpackCliPath, "--mode", "production"], {
  cwd: rootDir,
  stdio: "inherit",
});

if (bundleResult.status !== 0) {
  process.exit(bundleResult.status ?? 1);
}

if (!existsSync(publicDir)) {
  console.error("Missing public directory. Expected site assets in ./public.");
  process.exit(1);
}

mkdirSync(distDir, { recursive: true });
cpSync(publicDir, distDir, { force: true, recursive: true });
