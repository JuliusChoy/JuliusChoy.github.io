export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  content: string[];
}

export interface OtherSeriesItem {
  id: number;
  title: string;
  imageUrl: string;
}

export interface HeaderLink {
  label: string;
  href: string;
}