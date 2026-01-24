
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
    id: '2',
    title: 'SE Agent',
    description: 'https://github.com/Miaojj287/SE-Agent',
    images: [
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/Se1.png',
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/Se2.Jpg'
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
      'https://pub-7dac383b916a419199599b92fd6589a3.r2.dev/SCIID2.PNG'
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
      'https://picsum.photos/seed/paragon1/600/400'
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
    company: 'Etytech Studio',
    role: 'Founder',
    period: 'Jun 2022 - Current',
    location: 'GuangZhou, China',
    description: 'By leveraging the power of AI, we empower businesses across industries to improve efficiency and deliver better services to their customers'
  },
  {
    id: '2',
    company: ' ByteDance',
    role: 'Product Lead',
    period: 'Dec 2025 - Current',
    location: 'GuangZhou, China',
    description: 'Owned 0 to 1 incubation of AI initiatives for cross-border e-commerce—driving strategy, tech stack decisions, and team buildout, aligning multi-disciplinary execution (ML/engineering/design) to rapidly validate business models and deliver AI solutions.'
  },
  {
    id: '3',
    company: 'Ainia',
    role: 'Technical Product Manager',
    period: 'Dec 2025 - Current',
    location: 'San Jose, CA',
    description: 'Create Wefun platform with team, the original intention of the our product is letting users express emotions through personalized games and using AI to enable them to fully unleash their novel creativity.'
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
    content: 'ML, DL, RL, Transformer, AI Agent, Vibe Coding',
    color: 'bg-green-100 dark:bg-green-900/40',
    rotate: '-rotate-2'
  },
  {
    title: 'Tools',
    content: 'Trello, Figma, Tableau, Xcode, Unity, VS Code, Cursor, Supabase',
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
