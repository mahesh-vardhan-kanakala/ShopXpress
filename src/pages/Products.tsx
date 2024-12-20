import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Products() {
  const { category } = useParams();
  const { products, loading } = useProducts(category);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        {category 
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
          : 'All Products'}
      </h1>
      <ProductGrid products={products} />
    </div>
  );
}