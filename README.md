# ECHO VEX - 电子音乐人品牌官网

这是一个为现代流行电子风格音乐人设计的单页品牌官网，充满科技感与电子音乐的能量感。

## 🎨 设计特色

### 整体风格
- **现代前卫**：充满科技感与电子音乐能量
- **主色调**：深空蓝、电光紫、霓虹青
- **点缀色**：电光蓝、霓虹粉荧光色
- **视觉元素**：动态渐变背景、光晕效果、故障艺术文字、网格线、抽象声波图形

### 技术特性
- ✅ 完全响应式设计（桌面端/平板/手机）
- ✅ CSS3 动画与过渡效果
- ✅ 粒子背景动态效果
- ✅ 滚动入场动画
- ✅ 故障艺术（Glitch Art）文字效果
- ✅ 霓虹发光效果
- ✅ 移动端汉堡菜单

## 📁 文件结构

```
echo-vex-musician-website/
├── index.html          # 主 HTML 文件
├── styles.css          # 样式表
├── script.js           # 交互脚本
└── README.md           # 说明文档
```

## 🚀 使用方法

### 方式一：直接打开
直接在浏览器中打开 `index.html` 文件即可预览。

### 方式二：使用本地服务器（推荐）

#### 使用 Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用 Node.js
```bash
npx http-server -p 8000
```

#### 使用 PHP
```bash
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

## 📱 页面模块

### 1. 首屏（Hero Section）
- 全屏高度动态粒子背景
- 故障艺术效果的艺名标题
- 霓虹发光 CTA 按钮
- 滚动提示动画

### 2. 音乐模块（Music）
- 4 首热门单曲卡片展示
- 抽象几何封面设计
- 模拟播放按钮（点击控制台输出）
- Spotify / Apple Music 平台链接

### 3. 关于艺人（About）
- 左右分栏布局
- 赛博朋克风格人物剪影
- 艺人简介与成就统计
- 霓虹关键词高亮

### 4. 演出日程（Tour）
- 时间线式演出列表
- 3 场近期演出信息
- 悬停发光边框效果
- 购票按钮

### 5. 视觉/视频（Visuals）
- YouTube/Vimeo 风格视频占位
- 播放按钮交互动画
- 抽象几何背景

### 6. 邮件订阅（Newsletter）
- 简洁订阅表单
- 霓虹边框输入框
- 成功提交反馈动画

### 7. 页脚（Footer）
- 版权信息
- 社交媒体图标（Instagram、X、TikTok、SoundCloud）
- 霓虹悬停效果

## 🎯 交互功能

### 鼠标悬停效果
- 导航链接下划线动画
- 音乐卡片上浮 + 发光边框
- 演出卡片横向移动 + 发光
- 按钮缩放 + 光效
- 社交媒体图标上浮 + 变色

### 点击交互
- **播放按钮**：控制台输出 "播放 [歌曲名]"
- **购票按钮**：弹出提示信息
- **平台链接**：弹出提示信息
- **视频播放**：弹出提示信息
- **订阅表单**：显示成功动画

### 滚动动画
- 元素渐显上浮入场
- 导航栏背景加深
- 粒子背景持续运动

## 🎨 自定义指南

### 修改颜色主题
在 `styles.css` 中修改 CSS 变量：

```css
:root {
    --deep-space-blue: #0a0e27;      /* 深空蓝 */
    --electric-purple: #7b2cbf;       /* 电光紫 */
    --neon-cyan: #00f5ff;             /* 霓虹青 */
    --electric-blue: #3a86ff;         /* 电光蓝 */
    --neon-pink: #ff00ff;             /* 霓虹粉 */
}
```

### 修改艺人信息
在 `index.html` 中搜索并替换：
- `ECHO VEX` → 你的艺名
- `声音即未来 | 重塑电子边界` → 你的标语
- 歌曲名称、演出信息等

### 添加真实链接
将所有 `href="#"` 替换为实际链接：
- 音乐平台链接
- 社交媒体主页
- 票务平台链接
- 视频嵌入链接

### 嵌入真实视频
在 `.video-thumbnail` 位置替换为：
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
</iframe>
```

## 🌐 浏览器兼容性

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ 移动端浏览器

## 📊 性能优化

- 使用 CSS3 硬件加速
- Intersection Observer API 实现滚动动画
- 节流函数优化滚动事件
- 最小化 DOM 操作
- 语义化 HTML 标签

## 🎵 扩展建议

1. **添加真实音频播放**：集成 Spotify/Apple Music embed player
2. **后台管理系统**：连接 CMS 更新演出信息
3. **数据分析**：集成 Google Analytics
4. **SEO 优化**：添加 meta 描述、Open Graph 标签
5. **PWA 支持**：添加 manifest.json 和 Service Worker
6. **多语言支持**：i18n 国际化

## 📝 注意事项

- 当前为演示版本，所有链接使用 `#` 占位
- 播放功能仅在控制台输出，无真实音频
- 图片使用 CSS 渐变代替，可替换为真实图片
- 视频为占位符，需替换为真实嵌入代码

## 🎉 开始使用

1. 下载所有文件到同一目录
2. 双击打开 `index.html`
3. 开始定制你的音乐人官网！

---

**开发者**：AI Assistant  
**创建日期**：2026 年 3 月 25 日  
**版本**：1.0.0  

---

*声音即未来 | 重塑电子边界*
