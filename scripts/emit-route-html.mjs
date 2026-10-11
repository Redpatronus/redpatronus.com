import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { publicPages, renderHead, renderLlms, renderRobots, renderSitemap, renderTodoComments } from "../src/seo/site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const indexPath = path.join(distDir, "index.html");
const START = "<!--seo-head:start-->";
const END = "<!--seo-head:end-->";
const TODO_START = "<!--seo-todos:start-->";
const TODO_END = "<!--seo-todos:end-->";

function replaceBlock(html, start, end, inner) {
  const startIndex = html.indexOf(start);
  const endIndex = html.indexOf(end);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`Missing ${start} / ${end} markers`);
  }
  return `${html.slice(0, startIndex + start.length)}\n    ${inner}\n    ${html.slice(endIndex)}`;
}

function writeSourceIndex() {
  const source = path.join(root, "index.html");
  let html = fs.readFileSync(source, "utf8");
  html = replaceBlock(html, TODO_START, TODO_END, renderTodoComments());
  html = replaceBlock(html, START, END, renderHead("/", "en"));
  fs.writeFileSync(source, html);
}

function writePublicFiles() {
  writeSourceIndex();
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), renderSitemap());
  fs.writeFileSync(path.join(root, "public", "robots.txt"), renderRobots());
  fs.writeFileSync(path.join(root, "public", "llms.txt"), renderLlms());
}

function emitRoutes() {
  if (!fs.existsSync(indexPath)) {
    throw new Error("dist/index.html is missing. Run vite build first.");
  }
  const template = fs.readFileSync(indexPath, "utf8");
  const withTodos = replaceBlock(template, TODO_START, TODO_END, renderTodoComments());

  for (const page of publicPages()) {
    const html = replaceBlock(withTodos, START, END, renderHead(page.path, "en"));
    if (page.path === "/") {
      fs.writeFileSync(indexPath, html);
      continue;
    }
    const directory = path.join(distDir, page.path.slice(1));
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, "index.html"), html);
  }

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), renderSitemap());
  fs.writeFileSync(path.join(distDir, "robots.txt"), renderRobots());
  fs.writeFileSync(path.join(distDir, "llms.txt"), renderLlms());
}

const sourceOnly = process.argv.includes("--source-only");
writePublicFiles();
if (!sourceOnly) emitRoutes();
console.log(sourceOnly ? "Wrote public SEO files" : "Wrote route HTML and public SEO files");
