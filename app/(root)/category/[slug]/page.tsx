import { getProductsByCategory, getAllCategories } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  return categories.map((item) => ({
    slug: item.category.toLowerCase(), // URL amigable
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProductsByCategory(params.slug);

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.slug}</h1>

      {products.length === 0 && (
        <p className="text-gray-600">No hay productos en esta categoría.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="group border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={product.images?.[0] ?? "/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover rounded-md group-hover:scale-105 transition"
              />
            </div>

            <h2 className="font-semibold text-lg">{product.name}</h2>

            <p className="text-gray-700 mt-1 font-medium">
              ${product.price}
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
              Ver producto
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
