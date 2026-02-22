export interface Article {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  cotent: string;
  image: string;
  category: string;
}
export interface Spot {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  mapUrl?: string;
}
export interface DbData {
  articles: Article[];
  spots: Spot[];
}
