import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4"
            />
          </Link>
          <div className="p-4">
            <Link to={`/products/${product.id}`}>
              <h2 className="text-lg font-semibold mb-2 hover:text-blue-600">
                {product.title.length > 40
                  ? `${product.title.substring(0, 40)}...`
                  : product.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}