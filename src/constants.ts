import { Experience, GalleryItem, Honor } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'xinghan',
    eyebrow: 'LEGAL OPERATIONS · AUTOMATION',
    period: '2026.05 - 2026.07',
    title: '法律科技与公司金融实习生',
    subtitle: '上海星瀚律师事务所 · 公司金融部',
    location: '中国上海',
    description: [
      '为 107 份尽调合同建立 OCR 与 11 个字段的结构化提取流程，0.5 天完成原需 2–3 天的人工台账整理，抽查准确率超过 95%。',
      '从数百份卷宗中提取仲裁、诉讼与执行要素，4 小时完成交付；使用企查查 MCP 核查近 300 位债权人的工商信息与债权状态。',
      '设计公众人物负面舆情监控方案，并搭建诉讼文书生成 Skill，将常用模板转化为可重复调用的工作流。',
      '参与律所知识管理与法律科技产品测试，撰写面向法律人的 Obsidian 培训材料。'
    ],
    tags: ['合同结构化', 'OCR', '法律自动化', '知识管理'],
    imageSrc: '/assets/images/xinghan-office-life.jpg',
    imageLabel: '在星瀚的工作日常',
    imageNote: '上海星瀚律师事务所 · 公司金融部',
    metrics: [
      { value: '107', label: '份合同' },
      { value: '11', label: '个字段' },
      { value: '95%+', label: '抽查准确率' }
    ]
  },
  {
    id: 'pudong-procuratorate',
    eyebrow: 'PUBLIC INTEREST · EVIDENCE',
    period: '2026.03 - 2026.06',
    title: '公益诉讼办公室实习生',
    subtitle: '上海市浦东新区人民检察院',
    location: '中国上海',
    description: [
      '参与办理公益诉讼案件 40 余件，覆盖生态环境、食品药品安全与网络诈骗等领域。',
      '协助完成案卷审查、证据材料整理与 30 余册卷宗归档，按统一规则核对事实、主体与证据链。',
      '参与 10 余次外出调查取证，理解证据从现场获取到规范入卷的完整路径。'
    ],
    tags: ['公益诉讼', '证据整理', '案件审查', '调查取证'],
    imageSrc: '/assets/images/pudong-procuratorate-internship-certificate.jpg',
    imageFit: 'contain',
    imageLabel: '浦东新区人民检察院实习证明',
    imageNote: '实习期间：2026.03.10 - 2026.06.10',
    documentUrl: '/assets/documents/pudong-procuratorate-internship-certificate.pdf',
    documentLabel: '查看检察院实习证明 PDF',
    metrics: [
      { value: '40+', label: '参与案件' },
      { value: '30+', label: '归档卷宗' },
      { value: '10+', label: '外出取证' }
    ]
  },
  {
    id: 'baofabao',
    eyebrow: 'LEGAL AI · EVALUATION',
    period: '2025.08 - 2026.02',
    title: '数字法律研究实习生',
    subtitle: '北京北大英华科技有限公司（北大法宝）',
    location: '远程 · 北京',
    description: [
      '按最高法要素式文书规范参与设计并复核 87 份测试案例，同步迭代提示词与数据标签。',
      '为法人及非法人组织定义敏感信息字段与对齐规则，参与数据脱敏与标注质量检查。',
      '测试“来合同”的合同要素提取能力，并参与法律大模型数据准确度评测与行业竞品调研。',
      '获首届“法宝 AI 特训营”优秀营员，带领小组获得团队第一。'
    ],
    tags: ['模型评测', '提示词设计', '数据脱敏', '合同要素'],
    imageSrc: '/assets/images/pku-ai-winner.png',
    imageFit: 'contain',
    imageLabel: '法宝 AI 特训营优秀营员',
    imageNote: '训练营证书 · 带领小组获得团队第一',
    diagramZone: [
      {
        src: '/assets/images/fabao-work-proof.png',
        label: '工作成果证明',
        caption: '要素式文书项目 · 87 份测试案例'
      }
    ],
    metrics: [
      { value: '87', label: '份测试案例' },
      { value: '1st', label: '团队成绩' }
    ]
  },
  {
    id: 'allbright',
    eyebrow: 'IPO · DUE DILIGENCE',
    period: '2025.06 - 2025.07',
    title: 'IPO 项目实习生',
    subtitle: '上海市锦天城律师事务所 · 驻场无锡',
    location: '中国无锡',
    description: [
      '审查业务合同 20 余份，核对关键条款并整理底稿问题清单。',
      '对出资人开展股权穿透核查，检索工商登记、诉讼仲裁与行政处罚等公开信息。',
      '参与 IPO 驻场项目的底稿检查，建立对尽调证据完整性与可追溯性的基础认识。'
    ],
    tags: ['IPO', '合同审查', '股权穿透', '尽职调查'],
    imageSrc: '/assets/images/allbright-logo.png',
    imageFit: 'contain',
    imageLabel: '上海市锦天城律师事务所',
    imageNote: 'IPO 项目实习 · 驻场无锡',
    metrics: [{ value: '20+', label: '份合同审查' }]
  }
];

export const RESEARCH: Experience[] = [
  {
    id: 'fudan-research',
    eyebrow: 'KNOWLEDGE GRAPH · RESEARCH',
    period: '2024.09 - 至今',
    title: '硕士研究员',
    subtitle: '复旦大学智慧法治实验室',
    location: '中国上海',
    description: [
      '参与国家重点研发计划“跨部门金融案件数据共享与知识服务关键技术研究”课题（2023YFC3304401）。',
      '参与法律大模型测试案例编撰，并建设知识图谱数据标签体系与标注流程。',
      '审核课题专利申请初稿《一种基于检索增强生成的法律知识图谱本体-拓扑结构效率评价方法》。',
      '参写《金融法律知识图谱》，负责“符号主义与知识工程概述”章节。'
    ],
    tags: ['知识图谱', '法律大模型', '数据标签', '知识工程'],
    imageSrc: '/assets/images/research-certificate.png',
    imageFit: 'contain',
    imageLabel: '国家重点研发计划课题参研证明',
    imageNote: '跨部门金融案件数据共享与知识服务关键技术研究',
    diagramZone: [
      {
        src: '/assets/images/fudan-student-proof.png',
        label: '复旦在读证明',
        caption: '法律硕士在读'
      }
    ]
  }
];

export const PROJECTS: Experience[] = [
  {
    id: 'lawbor',
    eyebrow: 'PRODUCT · FULL STACK',
    period: '2026.04 - 2026.06',
    title: '团队负责人 / 全栈开发',
    subtitle: '第二届全国法律人 AI 应用大赛 · Lawbor 劳动者权益平台',
    location: '中国上海',
    description: [
      '从需求定义、系统设计到部署上线，完成面向职场人的劳动权益产品，覆盖合同审查、模拟面试与税务计算等六个模块。',
      '负责 Express、WebSocket 与 PostgreSQL 技术方案，并接入大模型 API 与企查查 MCP。',
      '通过 Supabase 权限策略隔离用户数据，把隐私保护落实到账号、会话与业务数据层。'
    ],
    tags: ['产品设计', '全栈开发', '数据隔离', '法律 AI'],
    liveDemoUrl: 'https://lawbor.vercel.app',
    diagramZone: [
      {
        src: '/assets/images/lawbor-team-certificate.jpg',
        label: '劳友记团队纪念证书',
        caption: '第二届全国法律人 AI 应用大赛 · 2026.05'
      }
    ],
    metrics: [
      { value: '6', label: '个产品模块' },
      { value: '90%', label: '个人开发贡献' }
    ]
  },
  {
    id: 'xiangmian-classroom',
    eyebrow: 'CAREER JOURNEY · INTERACTIVE STORY',
    period: '2026.04 - 2026.05',
    title: '奖学金唯一获得者 / 结业项目作者',
    subtitle: '相勉课堂 ·《我的法嘉之旅》',
    location: '线上作品',
    description: [
      '获相勉课堂奖学金，为本期唯一获得者。',
      '以互动网页完成课程大作业，记录相勉课堂学习经历、法嘉职场体验与个人成长路径。',
      '独立组织照片、文字与交互叙事，将一次课程体验转化为可公开访问的数字作品。'
    ],
    tags: ['奖学金', '互动网页', '个人叙事', '职业发展'],
    imageSrc: '/assets/images/xiangmian-scholarship.jpg?v=20260920',
    imageLabel: '相勉课堂第十二期优秀学员奖学金',
    imageNote: '本期唯一获得者 · 2026',
    liveDemoUrl: 'https://lawplus-career-journey.pages.dev/',
    documentUrl: '/assets/documents/xiangmian-classroom-certificate-score.pdf',
    documentLabel: '查看结业证书与评分表 PDF',
    diagramZone: [
      {
        src: '/assets/images/xiangmian-score-sheet.jpg',
        label: '课程评分表 · 总分 100',
        caption: '评分表注明：总得分最高的学员获得本期奖学金'
      },
      {
        src: '/assets/images/xiangmian-completion-certificate.jpg',
        label: '相勉课堂结业证书',
        caption: '第十二期 · 2026.04 - 2026.05'
      }
    ],
    metrics: [
      { value: '唯一', label: '奖学金获得者' },
      { value: '100', label: '课程总评' }
    ]
  },
  {
    id: 'xiaochengbei',
    eyebrow: 'CONSUMER FINANCE · LITIGATION',
    period: '2025.04 - 2025.06',
    title: '核心成员',
    subtitle: '第十一届“小城杯” · “美团不美”团队',
    location: '中国上海',
    description: [
      '调研网络信用贷平台的身份审核与格式条款问题，建立违规记录和证据清单。',
      '撰写《非学生承诺函》格式条款法律分析，并补充调查团队成员反馈与产品流程。',
      '项目进入复赛，并促成消费者组织、司法行政部门与平台方围绕产品整改展开沟通。'
    ],
    tags: ['平台合规', '消费者保护', '证据清单', '法律分析'],
    slideImages: [
      '/assets/ppt/slides/slide_01.jpg',
      '/assets/ppt/slides/slide_03.jpg',
      '/assets/ppt/slides/slide_07.jpg',
      '/assets/ppt/slides/slide_12.jpg'
    ]
  },
  {
    id: 'huaheng-mna',
    eyebrow: 'M&A · LEGAL WRITING',
    period: '2024.11',
    title: '并购 Workshop 优胜者',
    subtitle: '上海汇衡律师事务所第 31 届并购讲习班',
    location: '中国上海',
    description: [
      '负责独立保函部分的法律方案设计，拆解交易结构、风险分配与责任触发条件。',
      '协助起草法律意见书，并根据评委反馈完善论证结构与表达。'
    ],
    tags: ['并购交易', '独立保函', '法律意见书', '团队协作'],
    imageSrc: '/assets/images/huiheng-mna-mvp.jpg',
    imageLabel: '并购讲习班优胜者',
    imageNote: '第 31 届并购讲习班答谢晚宴 · 2024.11',
    documentUrl: '/assets/documents/huiheng-mna-certificate.pdf',
    documentLabel: '查看汇衡证书 PDF',
    diagramZone: [
      {
        src: '/assets/images/huiheng-mna-certificate.jpg',
        label: '第 31 届并购讲习班优胜者证书',
        caption: '上海汇衡律师事务所 · 2024.11'
      }
    ]
  }
];

export const HONORS: Honor[] = [
  {
    id: 'tencent-open',
    title: '中国大学生服务外包创新创业大赛东部区域赛三等奖',
    issuer: '法律 AI 应用创新与实践 · 腾讯开悟',
    date: '2026',
    imageSrc: '/assets/images/tencent-award-announcement-page-37.jpg',
    imageFit: 'contain',
    documentSrc: '/assets/documents/tencent-open-award-announcement.pdf',
    documentPage: 37,
    description: '复旦大学“智慧法治队”，公告序号 432；点击后可在网页内滚动查看完整官方公告。'
  },
  {
    id: 'fudan-third-scholarship',
    title: '复旦大学法学院三等优秀学业奖学金',
    issuer: '2024–2025 学年',
    date: '2025.06',
    imageSrc: '/assets/images/fudan-third-scholarship.jpg',
    imageFit: 'contain',
    documentSrc: '/assets/documents/fudan-third-scholarship.pdf',
    documentPage: 1,
    description: '复旦大学法学院优秀学业奖学金证书'
  },
  {
    id: 'lawbor-recognition',
    title: '劳友记团队纪念证书',
    issuer: '第二届全国法律人 AI 应用大赛',
    date: '2026.05',
    imageSrc: '/assets/images/lawbor-team-certificate.jpg',
    imageFit: 'contain',
    description: '复旦大学“劳友记”团队参赛纪念'
  },
  {
    id: 'pku-ai-winner',
    title: '首届“法宝 AI 特训营”优秀营员',
    issuer: '北大法宝',
    date: '2025',
    imageSrc: '/assets/images/pku-ai-winner.png',
    imageFit: 'contain',
    description: '带领小组获得团队第一'
  },
  {
    id: 'english-contest',
    title: '全国大学生英语竞赛国家一等奖',
    date: '2022',
    imageSrc: '/assets/images/national-english-competition-first.png'
  },
  {
    id: 'bucerius',
    title: 'Certificate in Management and Leadership for Lawyers',
    issuer: 'Bucerius Law School',
    date: '2025',
    imageSrc: '/assets/images/bucerius-certificate.png',
    imageFit: 'contain',
    description: '德国汉堡法学院交换项目证书'
  },
  {
    id: 'jiancha-fengyun',
    title: '《检察风云》见刊文章',
    date: '2025',
    imageSrc: '/assets/images/jiancha-fengyun-article.jpg',
    description: '《罪恶与娱乐的表演》《受害者无需“完美”》'
  }
];

export const GLOBAL_GALLERY: GalleryItem[] = [
  {
    src: '/assets/gallery/international-tribunal-hamburg.jpg',
    kicker: 'HAMBURG · VISIT',
    title: '去国际海洋法法庭参观',
    caption: '交换期间去了汉堡的国际海洋法法庭。第一次在现场看到书本里经常出现的机构，比单纯读材料更有感受。',
    objectPosition: 'center 68%'
  },
  {
    src: '/assets/gallery/bucerius-exchange-group.jpg',
    kicker: 'BUCERIUS · EXCHANGE',
    title: '汉堡法学院交换',
    caption: '2025 年在汉堡法学院交换时的大合照。那几个月里，课堂讨论和日常相处让我认识了来自不同国家的同学。'
  },
  {
    src: '/assets/gallery/foreign-business-meeting.jpg',
    kicker: 'SHANGHAI · CONVERSATION',
    title: '一次外商交流活动',
    caption: '参加外商交流活动时留下的照片。和不同背景的人聊工作与生活，也让我更习惯用简单、清楚的方式表达自己。',
    objectPosition: 'center 48%'
  },
  {
    src: '/assets/gallery/diwali-party.jpg',
    kicker: 'DIWALI · COMMUNITY',
    title: '参加排灯节聚会',
    caption: '和 WIC 的朋友们一起参加排灯节活动。比起“国际化”这个大词，我更喜欢这种一起吃饭、聊天、认识彼此的具体时刻。',
    objectPosition: 'center 60%'
  },
  {
    src: '/assets/gallery/fudan-german-corner.jpg?v=20260920',
    kicker: 'FUDAN · GERMAN CORNER',
    title: '复旦德语角',
    caption: '在复旦德语角的一次合照。学语言对我来说不只是背单词，也是认识另一种表达习惯和思考方式。',
    objectPosition: 'center 54%'
  }
];

export const EDUCATION = [
  {
    school: '复旦大学',
    degree: '法律硕士（非法学）',
    period: '2024.09 - 2027.06',
    awards: ['GPA 3.74/4 · 年级前 30%', '2024–2025 学年三等优秀学业奖学金'],
    courses: ['知识产权法', '人工智能与金融科技法'],
    hoverImage: '/assets/images/fudan-student-proof.png',
    hoverLabel: '复旦在读证明'
  },
  {
    school: '江南大学',
    degree: '计算机科学与技术学士',
    period: '2020.09 - 2024.06',
    awards: ['全国大学生英语竞赛国家一等奖'],
    courses: ['数据结构', '操作系统', '计算机网络']
  },
  {
    school: '德国汉堡法学院',
    degree: '学期交换项目',
    period: '2025.09 - 2025.12',
    awards: ['律师管理与领导力证书'],
    courses: ['Management', 'Leadership'],
    hoverImage: '/assets/images/bucerius-certificate.png',
    hoverLabel: 'Bucerius 证书'
  }
];
