import fs from "fs";
import path from "path";

export interface PageInfo {
  name: string;
  href: string;
}

// 内置页面（不在自动发现中显示）
const BUILTIN_ROUTES = new Set(["", "gallery", "about"]);

/**
 * 扫描 src/app 目录下的所有页面路由
 * 用于自动发现扩展页面
 */
export function discoverPages(): PageInfo[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const pages: PageInfo[] = [];

  try {
    const entries = fs.readdirSync(appDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;
      if (BUILTIN_ROUTES.has(entry.name)) continue;

      // 检查目录下是否有 page.tsx 或 page.ts
      const hasPage =
        fs.existsSync(path.join(appDir, entry.name, "page.tsx")) ||
        fs.existsSync(path.join(appDir, entry.name, "page.ts"));

      if (hasPage) {
        pages.push({
          name: entry.name,
          href: `/${entry.name}`,
        });
      }
    }
  } catch {
    // 目录不存在或读取失败时返回空数组
  }

  return pages;
}
