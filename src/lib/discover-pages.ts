import fs from "fs";
import path from "path";

export interface PageInfo {
  name: string;
  href: string;
  isModule: boolean; // true = 有 _components 等私有目录的复杂模块
}

const BUILTIN_ROUTES = new Set(["", "gallery", "about"]);

export function discoverPages(): PageInfo[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const pages: PageInfo[] = [];

  try {
    const entries = fs.readdirSync(appDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;
      if (BUILTIN_ROUTES.has(entry.name)) continue;

      const dirPath = path.join(appDir, entry.name);
      const hasPage =
        fs.existsSync(path.join(dirPath, "page.tsx")) ||
        fs.existsSync(path.join(dirPath, "page.ts"));

      if (!hasPage) continue;

      // 检查是否有私有子目录 → 复杂模块
      const children = fs.readdirSync(dirPath, { withFileTypes: true });
      const isModule = children.some(
        (c) => c.isDirectory() && c.name.startsWith("_")
      );

      pages.push({ name: entry.name, href: `/${entry.name}`, isModule });
    }
  } catch {
    // ignore
  }

  return pages;
}
