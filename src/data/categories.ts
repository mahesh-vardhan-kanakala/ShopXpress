export interface Category {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

export const categories: Category[] = [
  {
    name: "Electronics",
    description: "Browse our latest electronics collection.",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500",
    imageAlt: "Electronics",
    link: "/category/electronics"
  },
  {
    name: "Jewelry",
    description: "Discover stunning jewelry pieces.",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500",
    imageAlt: "Jewelry",
    link: "/category/jewelery"
  },
  {
    name: "Men's Fashion",
    description: "Shop the latest in men's fashion.",
    imageUrl: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=500",
    imageAlt: "Men's Fashion",
    link: "/category/men's clothing"
  },
  {
    name: "Women's Fashion",
    description: "Explore beautiful fashion for women.",
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=500",
    imageAlt: "Women's Fashion",
    link: "/category/women's clothing"
  }
];