# Aerith

灵感源自 Final Fantasy VII Remake 的 Aerith Gainsborough 主题网站。

## 开发

```bash
# 安装依赖
npm install

# 复制素材到 public（首次或素材更新后）
cp -r output public/output

# 启动开发服务器
npm run dev
```

## 构建 & 部署

```bash
npm run build
npm run start
```

## 添加新页面

新建 `src/app/[页面名]/page.tsx` 即可，自动生成路由。复杂模块可在文件夹内用 `_components/` 等下划线前缀目录组织私有文件。

## 设计规范

详见 `docs/AERITH_UI_DESIGN.md`
