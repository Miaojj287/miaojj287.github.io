
import { Project, Experience, SkillCard, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Gap Days',
    description: 'Help people in a gap period relieve anxiety, intelligently plan daily tasks, and visualize personal growth.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/GapDays1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/GapDays2.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/GapDays3.png'
    ],
    link: '#',
    tags: ['Ios App']
  },
  {
    id: '8',
    title: 'MetaGPT',
    description: 'A multi-agent framework that simulates a software company with LLM-based roles—product manager, architect, project manager, and engineer—turning natural-language input into code and project skeletons. 68K+ GitHub stars, 8.7K+ forks.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/MGX1.jpg',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/MGX2.jpg'
    ],
    link: 'https://github.com/geekan/MetaGPT',
    tags: ['Multi-Agent Framework']
  },
  {
    id: '2',
    title: 'SE Agent',
    description: 'A self-evolution framework enables trajectory-level evolution to exchange information across reasoning paths, expanding the search space and escaping local optima.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/Se1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/Se2.jpg'
    ],
    link: 'https://github.com/Miaojj287/SE-Agent',
    tags: ['RL AI Project']
  },
  {
    id: '3',
    title: 'SCIID Website',
    description: 'An website designed to present the institute\'s service offerings and representative project cases in a professional and engaging manner.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/SCIID1.JPG',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/SCIID2.png'
    ],
    link: 'https://github.com/Miaojj287/GDTUSCI-Web',
    tags: ['Responsive Website']
  },
  {
    id: '4',
    title: 'SCNU Education Platform',
    description: 'An online service platform for our university -- South China Normal University (SCNU), enabling students to sign in, submit comprehensive evaluations, book appointments, and track progress.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/SCNU1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/SCNU2.png'
    ],
    link: 'https://github.com/Miaojj287/SCNU-Integrated-Service-Platform',
    tags: ['Service Platform']
  },
  {
    id: '5',
    title: 'AR Education Game',
    description: 'An AR-based educational game for children aged 6–10, developed with Unity and the Vuforia plugin. The game integrates multiple subjects into interactive, immersive learning experiences.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/AR1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/AR2.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/AR3.png'
    ],
    link: 'https://etytech.com/',
    tags: ['Android App']
  },
  {
    id: '6',
    title: ' Wechat Bot',
    description: 'A custom WeChat plugin designed for bulk commercial email distribution. It features automatic keyword extraction and batch sending capabilities.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/WeChatBot.png'
    ],
    link: 'https://github.com/Miaojj287/wechat_BOT',
    tags: ['WeChat Plugin']
  },
  {
    id: '7',
    title: 'Intelligent work out',
    description: 'A companion WeChat program for my school gym, offering personalized training plan creation and workout management. The platform leverages data analytics to provide customized fitness recommendations and track progress over time.',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/WorkOut1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/WorkOut2.png'
    ],
    link: 'https://etytech.com/product',
    tags: ['Wechat Program']
  },

];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Etytech',
    role: 'Founder & Product Lead',
    period: 'Jun 2022 - Present',
    location: 'Guangzhou, China',
    description: 'Built AI-native products from the GPT-3.5 era, independently shipping 10+ web, iOS, and Android products with AI-assisted code while owning product decisions, UI design, and engineering review. Delivered a Chain-of-Thought data-labeling program for ByteDance’s Doubao LLM—designing labeling workflow, quality rubrics, and labeler onboarding for STEM-style problems used in in-context learning experiments.'
  },
  {
    id: '2',
    company: 'Finenter',
    role: 'AI Product Manager — AI Research Workspace & Intelligence Automation',
    period: 'Jan 2026 - Present',
    location: 'Hong Kong, China',
    description: 'Designed an AI research workspace for investment analysts (memory system, project-based wiki, AI sidebar) and led an agent task framework powered by OpenClaw with MCP-based tool authorization for due diligence and watchlist automation. Owned a WeChat intelligence ingestion pipeline that processes 5,000+ messages per day and reduced duplicate event records by 15% via improved deduplication, entity extraction, and summarization.'
  },
  {
    id: '3',
    company: 'Ainia',
    role: 'AI Product Manager',
    period: 'Jun 2025 - Jan 2026',
    location: 'San Jose, CA',
    description: 'Coordinated requirement breakdown, milestone tracking, and cross-team delivery to take wefun.ai—an AI-native gaming platform—from MVP to public beta with the founding team, reaching 3,000+ MAU in the first month. Worked with engineering to productionize AI capabilities (model integration, prompt tuning, task queueing, retry logic), achieving >85% first-pass generation success.'
  },
  {
    id: '4',
    company: 'Alibaba',
    role: 'Operation Manager',
    period: 'Aug 2025 - Nov 2025',
    location: 'Los Angeles, CA',
    description: 'Led warehouse and last-mile operations planning by optimizing staffing/dispatch across zones and building KPI dashboards to monitor inventory accuracy and delivery partner performance.'
  },
  {
    id: '5',
    company: 'Deckers Outdoor',
    role: 'Program Manager',
    period: 'Jan 2025 - Jun 2025',
    location: 'Goleta, CA',
    description: 'Analyzed large-scale multi-platform footwear SKU and pricing data using Python, and built Tableau dashboards and segmentation/price-elasticity models to inform localized pricing and marketing campaigns.'
  },
  {
    id: '6',
    company: 'DeepWisdom',
    role: 'Technical Product Manager Intern',
    period: 'Jan 2024 - Sep 2024',
    location: 'Shenzhen, China',
    description: 'Supported product planning for MetaGPT’s multi-agent vibe coding flow (natural language → code/project skeleton); onboarding and task-creation refinements reduced drop-off ~12% and increased first-task completion ~25%. Drove optimization studies on prompt structure, agent workflow, and RAG / tool-calling that cut median latency ~10% and per-task infra cost ~15%.'
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    school: 'University of California, Santa Barbara',
    degree: 'M.S. in Technology Management',
    period: '2025',
    location: 'Santa Barbara, CA',
    description: ''
  },
  {
    id: '2',
    school: 'South China Normal University',
    degree: 'B.S. in Electronic Information Engineering',
    period: '2024',
    location: 'Guangzhou, China',
    description: ''
  }

];

export const SKILL_CARDS: SkillCard[] = [
  {
    title: 'AI',
    content: 'ML, DL, RL, Transformer, AI Agent, Vibe Coding, RAG, LLM Wiki, MCP/CLI agent tooling, LLM pipeline evaluation, AI-assisted coding (Claude, Codex), PyTorch',
    color: 'bg-green-100 dark:bg-green-900/40',
    rotate: '-rotate-2'
  },
  {
    title: 'Product',
    content: 'PRD writing, user research (interviews, surveys), A/B testing, opportunity sizing, agile sprint planning, cross-functional delivery',
    color: 'bg-rose-100 dark:bg-rose-900/40',
    rotate: 'rotate-2'
  },
  {
    title: 'Tools',
    content: 'Trello, Figma, Jira, Lark, Notion, Tableau, Xcode, Unity, VS Code, Cursor, Supabase, MySQL',
    color: 'bg-rose-100 dark:bg-rose-900/40',
    rotate: 'rotate-3'
  },
  {
    title: 'Programming',
    content: 'Python, C, Java, HTML, CSS, JavaScript, Swift, SQL',
    color: 'bg-amber-100 dark:bg-amber-900/40',
    rotate: '-rotate-1'
  },
  {
    title: 'Language',
    content: 'English, Mandarin, Cantonese',
    color: 'bg-sky-100 dark:bg-sky-900/40',
    rotate: 'rotate-2'
  }
];
