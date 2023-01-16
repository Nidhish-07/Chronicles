type Category =
  | "business"
  | "sports"
  | "science"
  | "technology"
  | "entertainment";

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type Post = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string;
  languages: string;
  publishedAt: string;
  title: string;
  url: string;
};
type NewsResponse = { pagination: Pagination; dataEntry: Post[] };
