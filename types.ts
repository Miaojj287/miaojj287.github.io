
export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  location?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
  location?: string;
}

export interface SkillCard {
  title: string;
  content: string;
  color: string;
  rotate: string;
}
