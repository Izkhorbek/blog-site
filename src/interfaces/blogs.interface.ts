export interface IBlogs {
  id: string;
  excerpt: string;
  slug: string;
  title: string;
  image: {
    url: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;
  };
  createdAt: Date;
  description: {
    text: string;
    html: string;
  };
}
