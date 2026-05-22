import { Experience, Honor } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'baofeng',
    period: '2025.08 - 2026.02',
    title: '长期实习生 - 律 AI 多团队',
    subtitle: '北京北大英华科技有限公司 (北大法宝)',
    location: '中国北京 (远程)',
    description: [
      '深度参与"要素式文书"项目研发，对标最高人民法院公告标准，合作完成 87 份文书测试案例和提示词设计。',
      '独立设计法人及非法人组织敏感信息的对齐维度，主导数据脱敏工作。',
      '进行竞品调研，负责排查并优化"来合同"产品中合同要素提取的准确度，执行法律大模型性能测评。',
      '首届"法宝 AI 特训营"优秀营员，带领团队获得小组第一。'
    ],
    tags: ['大模型对齐', '数据脱敏', '提示词工程', 'Python'],
    imageSrc: '/assets/images/baofeng.jpg',
    fallbackImageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    diagramZone: [
      {
        src: '/assets/images/pku-ai-winner.png',
        label: '法宝 AI 特训营',
        caption: '优秀营员证书 · 带领团队获小组第一'
      },
      {
        src: '/assets/images/fabao-work-proof.png',
        label: '工作成果证明',
        caption: '要素式文书项目 · 87份测试案例'
      }
    ]
  },
  {
    id: 'fudan-research',
    period: '2024.12 - 至今',
    title: '硕士研究员',
    subtitle: '复旦大学智慧法治实验室',
    location: '中国上海',
    description: [
      '国社科重大项目：主要发达国家数据安全治理研究。负责德国数据安全战略与法律法规（如德国《数据保护法》、EU AI Act 在德落地政策）梳理。',
      '构建中德数据安全监管对比框架，重点分析跨境数据流动与算法合规的国际差异，为智库报告提供底层调研支撑。',
      '国家重点研发计划：金融案件数据共享与知识服务专项 (2023YFC3304401)。主导构建知识图谱数据标签标注体系并执行系统标注。',
      '硬核产出：参与审核专利初稿《一种基于检索增强生成的法律知识图谱本体-拓扑结构效率评价方法》；参写专业书籍《金融法律知识图谱》，负责"符号主义与知识工程概述"撰写。',
      '学术成绩：第一学年绩点 3.73/4，《知识产权法》与《人工智能与金融科技法》全 A。'
    ],
    tags: ['学术研究', '数据安全', '知识图谱建设', '比较法研究'],
    imageSrc: '/assets/images/fudan-lab.jpg',
    fallbackImageSrc: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
    diagramZone: [
      {
        src: '/assets/images/research-certificate.png',
        label: '项目参研证明',
        caption: '国社科重大项目 · 国家重点研发计划'
      },
      {
        src: '/assets/images/fudan-student-proof.png',
        label: '复旦在读证明',
        caption: '智慧法治实验室 · 硕士在读'
      }
    ]
  },
  {
    id: 'xiaochengbei',
    period: '2024.12 - 2025.11',
    title: '核心成员 - 第十一届“小城杯”',
    subtitle: '“美团不美”团队',
    location: '中国上海',
    description: [
      '负责网络信用贷平台深度调研，系统收集违规记录并建立证据清单，主导集体诉讼的策略分析。',
      '撰写关于《非学生承诺函》格式条款无效的法律分析报告；补充调查集体诉讼主体成员反馈，精准固定产品不合规信息。',
      '精准起诉美团规避“校园贷”身份审核漏洞，引发重庆消保委及杨浦区司法局高度关注。成功促成美团高层赴沪谈判，并推动其整改。'
    ],
    tags: ['平台合规', '消费者权益保护', '调查取证', '诉讼策略'],
    slideImages: Array.from({ length: 18 }, (_, i) => `/assets/ppt/slides/slide_${String(i + 1).padStart(2, '0')}.jpg`),
  },
  {
    id: 'lawbor',
    period: '2026.04',
    title: '全栈开发者 / 团队队长',
    subtitle: '第二届全国法律人 AI 应用大赛 - Lawbor 平台',
    location: '中国上海',
    description: [
      '从 0 到 1 主导开发面向职场人劳动保护的 AI 产品，承担 90% 的系统设计、开发与部署工作。',
      '合规与架构视角：深入底层技术栈 (Express.js / WebSocket / PostgreSQL)，接入大模型 API 与企查查 MCP。',
      '利用 Supabase 构建数据隔离，实现产品功能层面的“内置隐私保护 (Privacy by Design)”。'
    ],
    tags: ['产品架构', '数据隔离 (Supabase)', 'API 合规调用', '全栈开发'],
    liveDemoUrl: 'https://lawbor.vercel.app'
  }
];

export const HONORS: Honor[] = [
  {
    id: 'bucerius',
    title: 'Certificate in Management and Leadership for Lawyers',
    issuer: 'Bucerius Law School',
    date: '秋季学期',
    imageSrc: '/assets/images/bucerius-certificate.png',
    description: '德国汉堡法学院海外交换项目颁发'
  },
  {
    id: 'pku-ai-winner',
    title: '北大法宝第一届"法宝 AI 特训营"优秀营员',
    imageSrc: '/assets/images/pku-ai-winner.png',
    description: '带领团队获得小组第一'
  },
  {
    id: 'english-contest',
    title: '2022 年全国大学生英语竞赛国家一等奖',
    imageSrc: '/assets/images/national-english-competition-first.png'
  },
  {
    id: 'trans-contest',
    title: '2021 年全国大学生英语翻译大赛江苏省一等奖',
    imageSrc: '/assets/images/national-translation-contest-province-first.png'
  },
  {
    id: 'cet4-671',
    title: '大学英语四级 671 分',
    imageSrc: '/assets/images/cet4-671.png'
  },
  {
    id: 'cet6-644',
    title: '大学英语六级 644 分',
    imageSrc: '/assets/images/cet6-644.png'
  },
  {
    id: 'ielts',
    title: '雅思 7.5 分',
    imageSrc: '/assets/images/ielts-certificate-7.5.jpg'
  },
  {
    id: 'tell-china-wuxi',
    title: '用英语讲中国故事无锡选区一等奖',
    imageSrc: '/assets/images/tell-china-stories-wuxi-first.png'
  },
  {
    id: 'tell-china-east-china',
    title: '用英语讲中国故事华东 1 区二等奖',
    imageSrc: '/assets/images/tell-china-stories-east-china-second.png'
  },
  {
    id: 'red-cross',
    title: '中国红十字会救护员证',
    imageSrc: '/assets/images/first-aid-certificate.png'
  },
  {
    id: 'jiancha-fengyun',
    title: '《检察风云》见刊文章',
    imageSrc: '/assets/images/jiancha-fengyun-article.jpg',
    description: '刑事执行检察视角下的数字化转型'
  }
];

export const EDUCATION = [
  {
    school: '复旦大学',
    degree: '法学专业 法律硕士（非法本）',
    period: '2024.09 - 2027.06',
    awards: ['2024-2025 学年三等优秀学业奖学金', '绩点 3.73/4'],
    courses: ['知识产权法 (A)', '人工智能与金融科技法 (A)'],
    hoverImage: '/assets/images/fudan-student-proof.png',
    hoverLabel: '复旦在读证明'
  },
  {
    school: '江南大学',
    degree: '计算机科学与技术专业 本科',
    period: '2020.09 - 2024.06',
    awards: ['2022年全国大学生英语竞赛国家一等奖'],
    courses: ['数据结构', '操作系统', '计算机网络'],
    hoverImage: '/assets/images/jiangnan-university-graduation-certificate.png',
    hoverLabel: '江南大学毕业证'
  },
  {
    school: '汉堡法学院 (Bucerius)',
    degree: '学期交换项目',
    period: '2025.09 - 2025.12',
    awards: ['管理与领导力证书'],
    hoverImage: '/assets/images/bucerius-certificate.png',
    hoverLabel: 'Bucerius 证书'
  }
];
