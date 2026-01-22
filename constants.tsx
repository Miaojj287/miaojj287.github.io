
import { Project, Experience, SkillCard, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Paragon',
    description: 'Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.',
    images: [
      'https://picsum.photos/seed/paragon1/600/400',
      'https://picsum.photos/seed/paragon2/600/400',
      'https://picsum.photos/seed/paragon3/600/400'
    ],
    link: '#',
    tags: ['USE CASE']
  },
  {
    id: '2',
    title: 'Enchant',
    description: 'An immersive digital experience focusing on aesthetic minimalism and user-centric flows. Explored complex interactions and fluid animations.',
    images: [
      'https://picsum.photos/seed/enchant1/600/400',
      'https://picsum.photos/seed/enchant2/600/400'
    ],
    link: 'https://etytech.com/',
    tags: ['TEMPLATE']
  },
  {
    id: '3',
    title: 'Paragon',
    description: 'Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.',
    images: [
      'https://picsum.photos/seed/paragon1/600/400',
      'https://picsum.photos/seed/paragon2/600/400',
      'https://picsum.photos/seed/paragon3/600/400'
    ],
    link: '#',
    tags: ['USE CASE']
  },
  {
    id: '4',
    title: 'Enchant',
    description: 'An immersive digital experience focusing on aesthetic minimalism and user-centric flows. Explored complex interactions and fluid animations.',
    images: [
      'https://picsum.photos/seed/enchant1/600/400',
      'https://picsum.photos/seed/enchant2/600/400'
    ],
    link: 'https://etytech.com/',
    tags: ['TEMPLATE']
  },
  {
    id: '5',
    title: 'Paragon',
    description: 'Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.',
    images: [
      'https://picsum.photos/seed/paragon1/600/400',
      'https://picsum.photos/seed/paragon2/600/400',
      'https://picsum.photos/seed/paragon3/600/400'
    ],
    link: '#',
    tags: ['USE CASE']
  },
  {
    id: '6',
    title: 'Enchant',
    description: 'An immersive digital experience focusing on aesthetic minimalism and user-centric flows. Explored complex interactions and fluid animations.',
    images: [
      'https://picsum.photos/seed/enchant1/600/400',
      'https://picsum.photos/seed/enchant2/600/400'
    ],
    link: 'https://etytech.com/',
    tags: ['TEMPLATE']
  },
  {
    id: '7',
    title: 'Paragon',
    description: 'Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.',
    images: [
      'https://picsum.photos/seed/paragon1/600/400',
      'https://picsum.photos/seed/paragon2/600/400',
      'https://picsum.photos/seed/paragon3/600/400'
    ],
    link: '#',
    tags: ['USE CASE']
  },
  {
    id: '8',
    title: 'Enchant',
    description: 'An immersive digital experience focusing on aesthetic minimalism and user-centric flows. Explored complex interactions and fluid animations.',
    images: [
      'https://picsum.photos/seed/enchant1/600/400',
      'https://picsum.photos/seed/enchant2/600/400'
    ],
    link: 'https://etytech.com/',
    tags: ['TEMPLATE']
  }
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
    company: 'Ecom Bridge',
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
