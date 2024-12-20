interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function CategoryCard({ title, description, imageUrl, imageAlt }: CategoryCardProps) {
  return (
    <div className="h-full">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="object-cover w-full h-48 mb-4 rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}