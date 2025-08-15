export interface BlogArticle {
  title: string;
  description: string;
  url?: string;
  target?: string;
  date: string;
  readTime?: string;
  category?: string;
  image?: {
    src: string;
    alt: string;
  };
  author?: {
    name: string;
    avatar?: string;
  };
}

export interface BlogSection {
  title: string;
  description: string;
  articles?: BlogArticle[];
  cta?: {
    description: string;
    button?: {
      text: string;
      url: string;
      target?: string;
    };
  };
}
