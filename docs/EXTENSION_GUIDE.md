# 页面扩展指南

## 添加简单页面

在 `src/app/` 下新建文件夹，放一个 `page.tsx` 即可：

```
src/app/my-page/
  └── page.tsx
```

```tsx
// src/app/my-page/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export default function MyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-deep-950 pt-24">
        <Container>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-warm-100">
            页面标题
          </h1>
          <p className="mt-4 text-warm-400">内容...</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
```

保存后自动生效：
- 路由 `/my-page` 可访问
- 首页「花园小径」区域自动显示入口
- 页面切换自动带水波转场动画

## 添加复杂模块

用 `_` 前缀目录存放私有组件（不会变成路由）：

```
src/app/chat/
  ├── page.tsx            ← 页面入口
  ├── _components/        ← 私有组件
  │   ├── ChatInput.tsx
  │   └── MessageList.tsx
  ├── _hooks/
  │   └── useMessages.ts
  └── _utils/
      └── format.ts
```

在 `page.tsx` 中用相对路径导入：

```tsx
import { ChatInput } from "./_components/ChatInput";
```

## 共享资源

| 资源 | 路径 | 说明 |
|------|------|------|
| UI 组件 | `@/components/ui/` | AerithButton, AerithCard, AerithDivider 等 |
| 特效 | `@/components/effects/` | FloatingPetals, GlowOrb, Starlight, ShimmerText |
| 布局 | `@/components/layout/` | Navbar, Footer, Container, Section |
| 工具 | `@/lib/cn.ts` | 类名合并工具 `cn()` |
| 设计规范 | `docs/AERITH_UI_DESIGN.md` | 色彩、字体、动画等 token 定义 |
