# 📁 资源文件夹说明

## 目录结构

```
public/assets/
├── images/          ← 图片文件（照片、项目截图等）
├── documents/       ← 文档文件（简历 PDF 等）
└── ppt/             ← 演示文稿（小城杯 PPT 等）
```

## 使用说明

### 图片（`/assets/images/`）

| 文件名（建议）       | 用途说明               | 引用方式                          |
| -------------------- | ---------------------- | --------------------------------- |
| `profile.jpg`        | 首页个人照片           | `/assets/images/profile.jpg`      |
| `baofeng.jpg`        | 北大法宝实习配图       | `/assets/images/baofeng.jpg`      |
| `fudan-lab.jpg`      | 复旦研究院配图         | `/assets/images/fudan-lab.jpg`    |
| `xiaochengbei.jpg`   | 小城杯项目配图         | `/assets/images/xiaochengbei.jpg` |
| `lawbor.jpg`         | Lawbor 项目截图        | `/assets/images/lawbor.jpg`       |
| `bucerius.jpg`       | 汉堡法学院证书照片     | `/assets/images/bucerius.jpg`     |

### 文档（`/assets/documents/`）

| 文件名（建议）  | 用途说明             | 引用方式                             |
| --------------- | -------------------- | ------------------------------------ |
| `resume.pdf`    | 最新版简历 PDF       | `/assets/documents/resume.pdf`       |

### 演示文稿（`/assets/ppt/`）

| 文件名（建议）          | 用途说明              | 引用方式                             |
| ----------------------- | --------------------- | ------------------------------------ |
| `xiaochengbei.pdf`      | 小城杯演示 PPT（PDF） | `/assets/ppt/xiaochengbei.pdf`       |

> 💡 **建议**：将 PPT 转为 PDF 格式上传，浏览器可直接内嵌显示，用户体验更好。

## 如何在代码中引用

图片引用只需直接填写路径，例如：

```tsx
// 在 constants.ts 中修改 imageSrc
imageSrc: '/assets/images/xiaochengbei.jpg'

// 在组件中直接用 src
<img src="/assets/images/profile.jpg" alt="Macie" />
```

## 注意事项

- 图片建议压缩到 500KB 以内，使用 JPG/WebP 格式以提升加载速度
- 文件名全部使用小写英文 + 连字符，避免空格和中文
- 放置文件后无需重启开发服务器，刷新页面即可生效
