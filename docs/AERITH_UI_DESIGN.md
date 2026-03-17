# Aerith UI Design System

> 灵感源自 Final Fantasy VII Remake 中的 Aerith Gainsborough
> 本文档定义网站的视觉语言、设计规范和艺术风格

---

## 1. Design Philosophy / 设计哲学

### 1.1 核心关键词
- **Graceful（优雅）** — Aerith 的举止与气质，体现在流畅的曲线和柔和的过渡
- **Warm（温暖）** — 粉色调与暖中性色传达的亲切感
- **Natural（自然）** — 花卉、绿叶、水流、星光等自然元素贯穿始终
- **Luminous（光辉）** — 生命之流的发光特质，光效是核心视觉语言
- **Refined（精致）** — 高品质的细节打磨，非像素复古风，而是现代高保真设计

### 1.2 NOT — 不是什么
- 不是像素风 / 复古游戏风
- 不是暗黑哥特风
- 不是赛博朋克风（那是 Midgar 上层的风格）
- 不是简约极简白——要有温度和装饰性
- 不是扁平无细节——需要层次感和光影

### 1.3 视觉参考来源
- Aerith 的粉色连衣裙与红色蝴蝶结
- FF7R 中的黄色百合花（Aerith 的标志花卉）
- 五番街教堂中的花田与透过屋顶的金色阳光
- 忘却之都（Forgotten Capital）的蓝绿光芒
- 生命之流（Lifestream）的绿色光粒子
- Aerith 施展魔法时的光效与粒子
- 素材中的 CG 插画风格：金色光线、花海、古代遗迹、神圣光辉

---

## 2. Color System / 色彩系统

### 2.1 Aerith Pink — 主色（裙装粉）

源自 Aerith 标志性的粉色连衣裙，温柔而不甜腻。

| Token | Hex | 用途 |
|-------|-----|------|
| aerith-50 | #fef5f7 | 最浅底色、hover 背景 |
| aerith-100 | #fde8ee | 浅色背景 |
| aerith-200 | #fbd0dd | 边框、分隔线 |
| aerith-300 | #f8a8c0 | 蝴蝶结粉、装饰元素 |
| **aerith-400** | **#f27da0** | **主色 — 按钮、链接、强调** |
| aerith-500 | #e85d88 | 饱和强调、hover 状态 |
| aerith-600 | #d63d6d | 深色强调 |
| aerith-700 | #b22d56 | - |
| aerith-800 | #8e2445 | - |
| aerith-900 | #6d1d38 | 最深粉色 |

### 2.2 Lifestream Green — 副色（生命之流绿）

源自 Lifestream 与 Aerith 的 Cetra 血脉连接。

| Token | Hex | 用途 |
|-------|-----|------|
| lifestream-50 | #f0faf4 | 最浅绿底 |
| lifestream-100 | #d9f2e4 | 浅绿背景 |
| lifestream-200 | #b3e5c9 | 叶绿、装饰 |
| lifestream-300 | #7dd3a8 | 绿色元素 |
| **lifestream-400** | **#4ac087** | **副色 — 次要按钮、图标** |
| lifestream-500 | #2da76d | 饱和绿 |
| lifestream-600 | #228555 | - |
| lifestream-700 | #1c6a45 | - |
| lifestream-800 | #195438 | - |
| lifestream-900 | #15442e | 最深绿 |

### 2.3 Lily Gold — 点缀色（百合花金）

源自 Aerith 标志性的黄色百合花与教堂中穿透屋顶的金色阳光。用于温暖高光、强调装饰。

| Token | Hex | 用途 |
|-------|-----|------|
| lily-50 | #fefce8 | 最浅金底 |
| lily-100 | #fef9c3 | 浅金背景 |
| lily-200 | #fef08a | 浅金装饰 |
| lily-300 | #fde047 | 百合花黄 |
| **lily-400** | **#facc15** | **点缀色 — 高光、星光、特殊强调** |
| lily-500 | #eab308 | 深金强调 |
| lily-600 | #ca8a04 | 暖金色 |
| lily-700 | #a16207 | - |
| lily-800 | #854d0e | - |
| lily-900 | #713f12 | 最深金 |

**使用指南**: 金色作为第三色调，少量使用——星光闪烁、光线射线、特殊装饰元素、百合花 SVG。不用于大面积填充。

### 2.4 Warm Neutrals — 暖中性色

传达温暖与亲切，避免冷灰色调。

| Token | Hex | 用途 |
|-------|-----|------|
| warm-50 | #fefcfa | 页面主背景（亮色区段） |
| warm-100 | #fdf6ee | 次级背景 |
| warm-200 | #f5ebe0 | 卡片背景、奶油色 |
| warm-300 | #e8d8c8 | 边框 |
| warm-400 | #d4bfa8 | - |
| warm-500 | #b8a08a | - |
| warm-600 | #9a8270 | 次要文字 |
| warm-700 | #7a6658 | - |
| warm-800 | #5c4d42 | - |
| warm-900 | #3d332c | - |

### 2.5 Deep Tones — 深色调

用于文字、暗色背景区段，带有温暖的紫调而非纯黑。

| Token | Hex | 用途 |
|-------|-----|------|
| deep-800 | #2a2035 | 暗色背景 |
| deep-900 | #1a1525 | 主文字色 |
| deep-950 | #0f0d17 | 最深背景（Hero区） |

### 2.6 语义色彩映射

```
primary:      aerith-400     — 主操作、主要链接
secondary:    lifestream-400 — 次要操作
accent:       lily-400       — 特殊高光、星光
surface:      warm-50        — 默认亮色区段背景
surface-alt:  warm-200       — 卡片/面板背景
text:         deep-900       — 正文文字
text-muted:   warm-600       — 次要文字
text-on-dark: warm-100       — 暗背景上的文字
```

### 2.7 渐变定义

```
gradient-pink:      aerith-400 → aerith-500            — 按钮、强调背景
gradient-green:     lifestream-400 → lifestream-500     — 次要按钮
gradient-hero:      deep-950 → deep-800                 — Hero区暗色背景
gradient-divider:   aerith-300 → lifestream-300         — 装饰分隔线（粉到绿）
gradient-glow:      aerith-400/30% → transparent        — 粉色光晕
gradient-sunbeam:   lily-400/20% → transparent          — 金色光线/阳光射线
gradient-lifestream: lifestream-400/25% → lily-400/10%  — 生命之流光效
```

### 2.8 明暗交替策略

网站采用**明暗区段交替**的色彩节奏，不提供用户切换暗色模式的功能。

```
区段节奏示意:
  [DARK]  Hero       — deep-950 背景，花瓣飘落，光晕
  [LIGHT] About      — warm-50 背景，清新自然
  [DARK]  Feature    — deep-800 背景，星光闪烁
  [LIGHT] Gallery    — warm-50 / aerith-50 背景
  [DARK]  Quote      — deep-900 背景，光晕+引言
  [LIGHT] Footer     — warm-100 背景
```

暗色区段上光效表现力更强（花瓣、光晕、星光更突出）；亮色区段清新温暖，适合阅读内容。

---

## 3. Typography / 字体排印

### 3.1 字体选择

| 用途 | 字体 | 风格理由 |
|------|------|----------|
| Display / 展示标题 | Cormorant Garamond | 优雅高对比度衬线体，呼应 Aerith 的精致与古典气质 |
| Body / 正文 | Inter | 清晰可读的无衬线体，现代感 |
| Accent / 装饰标签 | Cinzel | 古典铭文风格，呼应 Cetra 古代种族的神秘感 |

### 3.2 字体层级

| 级别 | 字体 | 大小 | 行高 | 字间距 | 用途 |
|------|------|------|------|--------|------|
| Display | Cormorant Garamond | clamp(3rem, 6vw, 5rem) | 1.1 | -0.02em | Hero 大标题 |
| H1 | Cormorant Garamond | clamp(2.25rem, 4vw, 3.5rem) | 1.15 | -0.015em | 页面标题 |
| H2 | Cormorant Garamond | clamp(1.75rem, 3vw, 2.5rem) | 1.2 | -0.01em | 区段标题 |
| H3 | Cormorant Garamond | clamp(1.25rem, 2vw, 1.75rem) | 1.3 | 0 | 子标题 |
| Body | Inter | 1rem | 1.7 | 0 | 正文 |
| Small | Inter | 0.875rem | 1.6 | 0.01em | 辅助文字 |
| Caption | Cinzel | 0.75rem | 1.5 | 0.03em | 大写装饰标签 |

---

## 4. Spacing & Layout / 间距与布局

### 4.1 间距 Token

```
section-gap:     clamp(4rem, 10vh, 8rem)     — 区段之间
component-gap:   clamp(1.5rem, 3vw, 3rem)    — 组件之间
max-content:     72rem                        — 最大内容宽度
```

### 4.2 圆角

```
radius-soft:   0.75rem   — 卡片、按钮
radius-pill:   9999px    — 胶囊标签
```

### 4.3 响应式断点

```
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
```

---

## 5. Visual Effects / 视觉特效

> 所有特效组件均标记 `"use client"`，并尊重 `prefers-reduced-motion`

### 5.1 花瓣飘落 (FloatingPetals)

Aerith 的标志性视觉效果。花瓣缓缓从屏幕上方飘落。

- **实现**: CSS keyframes 动画（GPU 加速 transform），非 Canvas
- **花瓣数量**: 15-25 瓣
- **花瓣颜色**: 粉色(#f8a8c0)、白色(#fef5f7)、偶尔金黄色(#fde047, 百合花瓣)
- **行为**: 随机起始 X 位置、飘落速度(15-30s)、旋转角度、透明度(0.3-0.7)、尺寸(0.5x-1.2x)
- **飘落轨迹**: Y 轴直线下落 + X 轴正弦摆动（模拟风吹效果）
- **场景**: Hero 区、暗色背景区段
- **Props**: `density`(花瓣数), `speed`(速度倍率), `colors`(颜色覆盖)

### 5.2 光晕球 (GlowOrb)

柔和的径向渐变光球，缓慢脉动，营造魔法氛围。

- **实现**: 径向渐变 div + Motion 缓慢 scale(0.95→1.05)/opacity 动画
- **颜色变体**:
  - `pink` — 粉色光晕，用于 Hero 区右上角
  - `green` — 生命之流绿，用于 Hero 区左下角
  - `warm` — 暖白/金色光，用于亮色区段装饰
  - `gold` — 金色光晕，用于百合花相关场景
- **用途**: 背景装饰，绝对定位在内容后方，pointer-events: none
- **Props**: `color`, `size`(rem), `intensity`(0-1)

### 5.3 星光闪烁 (Starlight)

小光点随机闪烁，营造"教堂夜空"与"忘却之都"氛围。

- **实现**: CSS opacity 动画(0→1→0) + 随机 animation-delay
- **光点颜色**: 白色为主，偶尔点缀金色(lily-300)
- **场景**: 暗色区段背景
- **Props**: `count`(光点数), `color`

### 5.4 文字流光 (ShimmerText)

文字上有一道光芒缓缓从左到右滑过。

- **实现**: background-clip: text + 动画 linear-gradient 位移
- **光芒颜色**: 金色到白色渐变
- **用途**: Hero 大标题、重要引言（极少量使用，避免滥用）
- **Props**: `children`(文字), `color`(渐变色)

### 5.5 玻璃拟态 (Glassmorphism)

半透明毛玻璃效果。

```
暗色背景上:
  glass-bg:      rgba(255, 255, 255, 0.08)
  glass-border:  rgba(255, 255, 255, 0.12)
  glass-blur:    16px

亮色背景上:
  glass-bg:      rgba(255, 255, 255, 0.6)
  glass-border:  rgba(255, 255, 255, 0.3)
  glass-blur:    12px
```

### 5.6 光晕效果 Token

```
glow-pink:   0 0 40px rgba(242, 125, 160, 0.3)     — 粉色光晕
glow-green:  0 0 40px rgba(74, 192, 135, 0.25)      — 生命之流光晕
glow-warm:   0 0 60px rgba(253, 246, 238, 0.4)      — 暖白光晕
glow-gold:   0 0 40px rgba(250, 204, 21, 0.25)      — 金色光晕
```

### 5.7 动画时间 Token

```
duration-slow:     800ms      — 区段淡入、光晕脉动
duration-normal:   400ms      — 组件过渡、hover 效果
duration-fast:     200ms      — 按钮反馈、微交互
ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1)   — 弹性效果
ease-smooth:       cubic-bezier(0.4, 0, 0.2, 1)        — 平滑过渡
ease-gentle:       cubic-bezier(0.25, 0.1, 0.25, 1.0)  — 花瓣飘落
```

---

## 6. Animation & Interaction / 动画与交互

### 6.1 页面转场 — 花瓣光晕过渡

页面切换时的特色过渡效果：

1. 当前页面开始淡出(opacity 1→0.3)
2. 花瓣从四周飘入聚拢，同时一个粉色光晕从中心扩散覆盖屏幕
3. 光晕达到全屏时，底层切换为新页面
4. 光晕收缩消散，花瓣向外飘散，新页面淡入
5. 整个过渡 ~600-800ms

**降级方案**: `prefers-reduced-motion` 下简化为普通的 opacity 淡入淡出(300ms)

### 6.2 滚动触发动画

元素在滚动进入视口时触发入场动画：

| 动画类型 | 行为 | 使用场景 |
|----------|------|----------|
| fade-up | 从下方 20px 淡入上移 | 默认的内容块入场 |
| fade-in | 原地淡入 | 背景装饰元素 |
| stagger | 子元素依次 fade-up，间隔 100ms | 卡片网格、列表 |
| scale-in | 从 0.9 缩放到 1 + 淡入 | 图片、重要展示元素 |

- **触发阈值**: 元素进入视口 20% 时触发
- **只触发一次**: 动画播放后不再重复
- **实现**: Motion `whileInView` + `viewport={{ once: true, amount: 0.2 }}`

### 6.3 微交互细节

| 交互 | 效果 |
|------|------|
| 按钮 hover | 光晕扩散(box-shadow 增强) + 微上移(translateY: -1px) |
| 按钮 click | 快速缩小弹回(scale 0.97→1) + 涟漪效果(radial gradient 扩散) |
| 链接 hover | 粉色下划线从左向右滑入 |
| 卡片 hover | 上浮(translateY: -4px) + 光晕增强 + 边框发光 |
| 导航链接 hover | 底部出现一个微小的花瓣装饰 |
| 图片 hover | 微缩放(scale 1.02) + 光泽扫过 |
| Badge hover | 微发光 |

### 6.4 鼠标追踪效果

在**暗色区段**中，鼠标移动时有柔和的交互效果：

- **光晕跟随**: 鼠标位置有一个大范围(200-300px 直径)的柔和光晕跟随，颜色为暖金色(lily-400/15%)，延迟跟随(lerp 插值，~0.1 响应)
- **亮色区段不启用**，避免干扰阅读
- **实现**: CSS `radial-gradient` 跟随鼠标 position，或 Motion `useMotionValue` + `useSpring`

### 6.5 自定义光标

- **默认**: 小型发光圆点(8px)，颜色为 aerith-300，带柔和光晕
- **链接/按钮上**: 圆点放大(16px) + 颜色变为 lily-400
- **实现**: 隐藏系统光标(cursor: none)，用绝对定位 div 跟随鼠标
- **移动端**: 不启用自定义光标

---

## 7. Components / 组件规范

### 7.1 AerithButton

| 变体 | 外观 | hover 状态 | click 反馈 |
|------|------|-----------|------------|
| primary | 粉色渐变背景(aerith-400→500) + 白色文字 | 光晕扩散 + 微上移 | 缩小弹回 + 涟漪 |
| secondary | 透明背景 + lifestream-400 描边 + 绿色文字 | 背景填充淡绿(lifestream-50) | 缩小弹回 |
| ghost | 无边框 + aerith-400 文字 | 下划线从左滑入 | 文字闪烁 |
| golden | 金色渐变背景(lily-400→500) + deep-900 文字 | 金色光晕扩散 | 缩小弹回 + 涟漪 |

尺寸: `sm`(h-8 px-3 text-sm) / `md`(h-10 px-5) / `lg`(h-12 px-8 text-lg)

### 7.2 AerithCard

- 暖色调半透明背景 (warm-200 with opacity)
- 微妙的粉到绿渐变边框 (1px)
- hover: 微上浮 (translateY: -4px) + 光晕增强 + 边框发光
- 圆角: radius-soft
- 内边距: 1.5rem

**暗色区段版本**: 背景改为 glass-bg，边框改为 glass-border

### 7.3 GlassPanel

- 全毛玻璃效果 (backdrop-blur)
- 比 AerithCard 更透明，用于叠加在视觉背景上
- 自动适应明暗区段的 glass token

### 7.4 AerithDivider

| 变体 | 外观 |
|------|------|
| flower | 居中百合花 SVG 图标 + 两侧粉到绿渐变线 |
| vine | SVG 蔓藤装饰线 |
| fade | 粉(aerith-300)到绿(lifestream-300)渐变细线 |
| golden | 金色(lily-400)渐变线，用于特殊区段 |

### 7.5 AerithBadge

- 胶囊形状 (pill radius)
- Cinzel 字体，大写，小字号，letter-spacing 0.05em
- 颜色变体: pink / green / gold / neutral
- 用于标签、分类、状态标识
- hover: 微发光

### 7.6 Navbar

- 固定在页面顶部
- **滚动行为**: 向下滚动时隐藏，向上滚动时浮现
- 玻璃拟态背景（自动适应当前滚动到的明暗区段）
- Logo: "Aerith" — Cinzel 字体 + 微光效
- 导航链接: Inter 字体, hover 时底部出现花瓣装饰
- 移动端: 汉堡菜单 → 全屏毛玻璃面板，花瓣飘落背景

### 7.7 Footer

- 花卉装饰分隔线 (AerithDivider flower 变体)
- 极简信息
- Cinzel 字体的 "Aerith" 标识
- 与最后一个区段背景色平滑过渡

---

## 8. Asset Strategy / 素材策略

### 8.1 贴纸/表情包素材 (`output/`)

约 50+ 张 Aerith 手绘风贴纸，分为三类：
- `aerith_action_*` — 动作类（捧花、施魔法、喝茶、浇花...）
- `aerith_emotion_*` — 表情类（开心、害羞、惊讶、思考...）
- `aerith_scene_*` — 场景类（早安、晚安、微风、观星...）

**使用场景**:
- **404 页面**: 使用 `aerith_emotion_dizzy` 或 `aerith_action_help`
- **加载状态**: 使用 `aerith_emotion_thinking` 系列
- **空状态**: 使用 `aerith_action_watering_flowers` 系列
- **微交互反馈**: 操作成功时弹出 `aerith_emotion_cheer`

### 8.2 背景图素材 (`output/backimage/`)

19 张高品质 CG 插画，风格包含神圣光辉、花海、古代遗迹、海边等场景。

**使用方式**: 不作为页面背景，而是在专门的**画廊展示页**中展示。

### 8.3 SVG 装饰素材（需创建）

以下 SVG 素材需要用代码绘制或导入：
- **百合花瓣** — 用于 FloatingPetals 效果
- **叶片** — 用于装饰
- **百合花图标** — 用于 AerithDivider flower 变体
- **蔓藤线条** — 用于 AerithDivider vine 变体
- **小花朵** — 用于导航 hover 装饰

### 8.4 自定义 Aerith 风图标集

自定义 SVG 图标，将花卉/自然元素融入图标设计：
- **主页**: 小花朵/花瓣形状
- **画廊**: 花框/相册
- **关于**: 百合花
- **外部链接**: 飘出的花瓣
- **菜单**: 三条蔓藤线（替代标准汉堡菜单线条）

风格: 线条为主，1.5px 粗细，圆角端点，与 Aerith 的柔和气质一致

---

## 9. Page Specifications / 页面规范

### 9.1 首页 (Homepage)

**明暗交替的展示型滚动页面**:

```
┌─────────────────────────────────────────┐
│ [Navbar - 玻璃拟态固定导航]              │
├─────────────────────────────────────────┤
│ ████████████████████████████████████████│
│ ██  [DARK] Hero Section  ███████████████│
│ ██  FloatingPetals + GlowOrbs ██████████│
│ ██  ShimmerText: "Aerith"  █████████████│
│ ██  Subtitle + CTA Button  ████████████│
│ ██  Scroll indicator ↓  ███████████████│
│ ████████████████████████████████████████│
├─────────────────────────────────────────┤
│                                         │
│  [LIGHT] About Section                  │
│  ┌──────────┐  ┌─────────────────┐     │
│  │ Sticker  │  │ 介绍文字        │     │
│  │ Image    │  │ AerithDivider   │     │
│  └──────────┘  │ 描述内容        │     │
│                └─────────────────┘     │
│                                         │
├─────────────────────────────────────────┤
│ ████████████████████████████████████████│
│ ██  [DARK] Gallery Preview  ████████████│
│ ██  Starlight background  ██████████████│
│ ██  ┌───────┐ ┌───────┐ ┌───────┐  ████│
│ ██  │ Card  │ │ Card  │ │ Card  │  ████│
│ ██  └───────┘ └───────┘ └───────┘  ████│
│ ██  "查看更多" → Gallery page  █████████│
│ ████████████████████████████████████████│
├─────────────────────────────────────────┤
│                                         │
│  [LIGHT] Quote Section                  │
│  "   经典 Aerith 语录    "             │
│  — Aerith Gainsborough                  │
│  GlowOrb (warm) behind                 │
│                                         │
├─────────────────────────────────────────┤
│ ─── 🌸 AerithDivider 🌸 ───           │
│ [Footer]                                │
└─────────────────────────────────────────┘
```

### 9.2 画廊页 (Gallery)

展示 `output/backimage/` 中的 19 张 CG 插画：
- Masonry 或等宽网格布局
- 图片 hover: 微缩放 + 光泽扫过
- 点击: 全屏灯箱查看 (lightbox)
- 背景: warm-50，亮色为主

### 9.3 About 页

关于 Aerith / 网站信息的展示页面：
- 使用 Aerith 贴纸素材作为装饰插画
- 内容区域使用 AerithCard 组件
- 暗色 Hero banner + 亮色内容区

### 9.4 404 页面

- 暗色背景 + 少量花瓣飘落
- 居中展示 Aerith 贴纸（困惑/迷路表情）
- "迷路了？让我带你回去" + 返回首页按钮

---

## 10. Accessibility / 无障碍

### 10.1 动效降级
- 尊重 `prefers-reduced-motion`:
  - 花瓣: 静态散布展示，无飘落动画
  - 光晕: 静态展示，无脉动
  - 流光文字: 禁用，显示纯文字
  - 页面转场: 简化为 opacity 淡入淡出
  - 自定义光标: 禁用，使用系统光标
  - 鼠标追踪: 禁用

### 10.2 色彩对比
- 正文文字 vs 背景至少达到 WCAG AA (4.5:1)
- 大标题至少 3:1
- 暗色区段: warm-100 on deep-950 ✓
- 亮色区段: deep-900 on warm-50 ✓

### 10.3 交互可访问性
- 所有交互元素有明确的 focus 状态（粉色光晕 outline）
- 自定义光标不影响实际 click target
- 键盘可导航

---

## 11. TODO — 后续迭代

> 以下内容超出 MVP 范围，后续迭代中逐步补充

- [ ] 更多 UI 组件（输入框、对话框、Toast、Tooltip）
- [ ] 深色/亮色全局模式切换（如需要）
- [ ] 更精细的响应式适配策略文档
- [ ] 贴纸动画系统（贴纸弹入弹出的标准化动画）
- [ ] 音效设计（hover 音效、页面转场音效——可选）
- [ ] 更多自定义 Aerith 图标
- [ ] 性能优化指南（大量特效时的帧率保障）
