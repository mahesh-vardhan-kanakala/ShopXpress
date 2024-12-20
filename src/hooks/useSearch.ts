import { useState, useEffect } from 'react';
import { Product } from '../types/product';

export function useSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        const filtered = products.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      })
      .catch(error => {
        console.error('Error searching products:', error);
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return { results, loading };
}