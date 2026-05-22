# 📁 资源文件夹说明

## 目录结构

```
public/assets/
├── images/          ← 图片文件（照片、项目截图、证书等）
├── documents/       ← 文档文件（简历 PDF 等）
└── ppt/             ← 演示文稿（待补充）
```

---

## 🖼️ 图片（`/assets/images/`）（板块照片大于一张时可编程照片墙左右滑动查看）

| 文件名                   | 用途说明                          | 引用方式                                  |
| ------------------------ | --------------------------------- | ----------------------------------------- |
| `profile.jpg`            | 首页个人照片                      | `/assets/images/profile.jpg`              |
| `fabao-work-proof.png`  | 北大法宝实习工作内容，放在实习经历北大法宝的图表区              | `/assets/images/fabao-work-proof.png`     |
| `fudan-student-proof.png` | 复旦大学在读证明，放在教育背景的复旦板块，当鼠标触及此处背景显示该图片                  | `/assets/images/fudan-student-proof.png`  |
| `jiancha-fengyun-article.jpg` | 检察风云见刊文章              | `/assets/images/jiancha-fengyun-article.jpg` |
| `research-certificate.png` | 项目参研证明，，放在项目经历复旦实验室的图表区                    | `/assets/images/research-certificate.png` |
| `pku-ai-winner.png`     | 北大法宝AI训练营证书，放在实习经历北大法宝的图表区                | `/assets/images/pku-ai-winner.png`       |
| `national-translation-contest-province-first.png` | 2021全国英语翻译大赛省一等奖 | `/assets/images/national-translation-contest-province-first.png` |
| `national-english-competition-first.png` | 全国大学生英语竞赛全国一等奖 | `/assets/images/national-english-competition-first.png` |
| `tell-china-stories-east-china-second.png` | 用英语讲中国故事华东1区二等奖 | `/assets/images/tell-china-stories-east-china-second.png` |
| `tell-china-stories-wuxi-first.png` | 用英语讲中国故事无锡选区一等奖 | `/assets/images/tell-china-stories-wuxi-first.png` |
| `cet4-671.png`           | 大学英语四级 671 分              | `/assets/images/cet4-671.png`             |
| `cet6-644.png`           | 大学英语六级 644 分              | `/assets/images/cet6-644.png`             |
| `ielts-certificate-7.5.jpg` | 雅思成绩单 7.5 分               | `/assets/images/ielts-certificate-7.5.jpg` |
| `first-aid-certificate.png` | 中国红十字会救助员证书                      | `/assets/images/first-aid-certificate.png` |
| `jiangnan-university-degree-certificate.png` | 江南大学学历证书，暂时不使用 | `/assets/images/jiangnan-university-degree-certificate.png` |
| `jiangnan-university-graduation-certificate.png` | 江南大学毕业证书，放在教育背景的江南大学板块，当鼠标触及此处背景显示该图片 | `/assets/images/jiangnan-university-graduation-certificate.png` |

---

## 📄 文档（`/assets/documents/`）

| 文件名                   | 用途说明                          | 引用方式                                    |
| ------------------------ | --------------------------------- | ------------------------------------------- |
| `resume-latest.pdf`      | 最新版简历 PDF                    | `/assets/documents/resume-latest.pdf`       |
| `meituan-case.pdf`       | 小城杯比赛项目演示PDF                  | `/assets/documents/meituan-case.pdf`        |
| `bucerius-certificate.pdf` | Bucerius 法学院证书（德语）       | `/assets/documents/bucerius-certificate.pdf` |

---

## 📊 演示文稿（`/assets/ppt/`）

> 目前暂无 PPT 文件，如有需要可放置于此。

---

## 如何在代码中引用

图片引用只需直接填写路径，例如：

```tsx
// 在 constants.ts 中修改 imageSrc
imageSrc: '/assets/images/profile.jpg'

// 在组件中直接用 src
<img src="/assets/images/profile.jpg" alt="Macie" />
```

---

## 注意事项

- 图片建议压缩到 500KB 以内，使用 JPG/WebP 格式以提升加载速度
- 文件名全部使用小写英文 + 连字符，避免空格和中文
- 放置文件后无需重启开发服务器，刷新页面即可生效
