# 个人作品集网站

一个简约现代风格的作品集网页。

## 文件结构

```
个人作品集/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript 逻辑
├── PROGRESS.md     # 项目进度总结
├── README.md       # 使用说明（本文件）
├── works/          # 作品文件夹
│   ├── snake-game.html
│   ├── brick-breaker.html
│   ├── card-generator.html
│   └── mbti_test.html
├── images/        # 图片文件夹
└── audio/         # 音频文件夹
```

## 快速预览

双击打开 `index.html` 即可在浏览器中查看。

## 修改个人信息

打开 `index.html`，修改以下内容：
- 第 34 行：`<h3 id="name">你的名字</h3>` → 你的姓名
- 第 35 行：`<p id="intro">个人简介内容...</p>` → 你的简介

## 添加头像

将头像图片放入 `images/` 文件夹，命名为 `avatar.jpg`

## 添加背景音乐

将 MP3 文件放入 `audio/` 文件夹，命名为 `bgm.mp3`

## 添加新作品

打开 `script.js`，在 `works` 数组中添加：
```javascript
{
    title: '作品名称',
    description: '作品描述',
    link: 'works/你的作品.html',
    icon: '🎨'  // 使用 emoji 作为图标
}
```

## 部署上线

需要上线时，可以：
1. 使用 Netlify：访问 netlify.com，拖拽整个文件夹上传
2. 使用 GitHub Pages：推送到 GitHub 仓库

---
有问题随时找我！
