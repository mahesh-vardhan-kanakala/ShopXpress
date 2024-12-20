import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Welcome to <span className="text-blue-200">ShopXpress</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-blue-100">
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy our
            premium selection.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <Link
              to="/category/electronics"
              className="px-6 py-3 text-base font-semibold text-indigo-600 transition-colors bg-white rounded-md shadow-sm hover:bg-indigo-50"
            >
              Shop Electronics
            </Link>
            <Link
              to="/category/jewelery"
              className="px-6 py-3 text-base font-semibold text-white transition-colors bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400"
            >
              View Jewelry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}