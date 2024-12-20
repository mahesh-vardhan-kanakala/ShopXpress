import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

export default function FeaturedCategories() {
  return (
    <section className="py-12 bg-gray-50 rounded-2xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Featured Categories</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="relative overflow-hidden transition-shadow bg-white rounded-lg shadow-md group hover:shadow-xl"
            >
              <CategoryCard
                title={category.name}
                description={category.description}
                imageUrl={category.imageUrl}
                imageAlt={category.imageAlt}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}