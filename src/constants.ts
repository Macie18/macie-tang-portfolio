import { Experience, Honor } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'baofeng',
    period: '2025.08 - 2026.02',
    title: '长期实习生 - 律 AI 多团队',
    subtitle: '北京北大英华科技有限公司 (北大法宝)',
    location: '中国北京 (远程)',
    description: [
      '深度参与“要素式文书”项目研发，对标最高人民法院公告标准，合作完成 87 份文书测试案例和提示词设计。',
      '独立设计法人及非法人组织敏感信息的对齐维度，主导数据脱敏工作。',
      '进行竞品调研，负责排查并优化“来合同”产品中合同要素提取的准确度，执行法律大模型性能测评。',
      '首届“法宝 AI 特训营”优秀营员，带领团队获得小组第一。'
    ],
    tags: ['大模型对齐', '数据脱敏', '提示词工程', 'Python'],
    imageSrc: '/assets/images/baofeng.jpg',
    fallbackImageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
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
      '硬核产出：参与审核专利初稿《一种基于检索增强生成的法律知识图谱本体-拓扑结构效率评价方法》；参写专业书籍《金融法律知识图谱》，负责“符号主义与知识工程概述”撰写。',
      '学术成绩：第一学年绩点 3.73/4，《知识产权法》与《人工智能与金融科技法》全 A。'
    ],
    tags: ['学术研究', '数据安全', '知识图谱建设', '比较法研究'],
    imageSrc: '/assets/images/fudan-lab.jpg',
    fallbackImageSrc: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop'
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
    imageSrc: '/assets/images/xiaochengbei.jpg',
    fallbackImageSrc: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
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
    imageSrc: 'https://images.unsplash.com/photo-1523050335456-c38730b0ebf6?q=80&w=2070&auto=format&fit=crop',
    description: '德国汉堡法学院海外交换项目颁发'
  },
  {
    id: 'scholarship',
    title: '2025 年复旦大学校级三等奖学金',
    imageSrc: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2042&auto=format&fit=crop'
  },
  {
    id: 'workshop-winner',
    title: '汇衡律师事务所并购讲习班优胜组成员',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'baofeng-honor',
    title: '北大法宝第一届“法宝 AI 特训营”优秀营员',
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'english-contest',
    title: '2022 年全国大学生英语竞赛国家一等奖',
    imageSrc: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'writing-contest',
    title: '2022 年全国大学生英语写作大赛江苏省三等奖',
    imageSrc: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'trans-contest',
    title: '2021 年全国大学生英语翻译大赛江苏省一等奖',
    imageSrc: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop'
  },
  {
    id: 'speech-contest',
    title: '2022 年外研社杯英语演讲大赛校特等奖',
    imageSrc: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'red-cross',
    title: '中国红十字会救护员证',
    imageSrc: 'https://images.unsplash.com/photo-1505751172107-573225a91200?q=80&w=2070&auto=format&fit=crop'
  }
];

export const EDUCATION = [
  {
    school: '复旦大学',
    degree: '法学专业 法律硕士（非法本）',
    period: '2024.09 - 2027.06',
    awards: ['2024-2025 学年三等优秀学业奖学金', '绩点 3.73/4'],
    courses: ['知识产权法 (A)', '人工智能与金融科技法 (A)']
  },
  {
    school: '江南大学',
    degree: '计算机科学与技术专业 本科',
    period: '2020.09 - 2024.06',
    awards: ['2022年全国大学生英语竞赛国家一等奖'],
    courses: ['数据结构', '操作系统', '计算机网络']
  },
  {
    school: '汉堡法学院 (Bucerius)',
    degree: '学期交换项目',
    period: '2025.09 - 2025.12',
    awards: ['管理与领导力证书']
  }
];
