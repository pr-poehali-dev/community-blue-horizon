export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  citations: number;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  speakers: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialization: string;
  publications: number;
  hIndex: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  funding: string;
  duration: string;
  leader: string;
  status: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
}
