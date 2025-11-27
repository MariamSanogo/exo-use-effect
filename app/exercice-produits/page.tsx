import Link from "next/link";
import { EXO_PRODUCTS_LIST, getCategories } from "./products-mock";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  // On attend la résolution de searchParams
  const params = await searchParams;
  const category = params?.category;

  const filteredProducts = category
    ? EXO_PRODUCTS_LIST.filter((product) => product.category === category)
    : EXO_PRODUCTS_LIST;

  const categories = getCategories();

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Liste des produits</h2>

      {/* FILTRES */}
      <div className="flex gap-3 mb-5">
        <Link
          href="/exercice-produits"
          className={`px-3 py-1 rounded ${
            !category ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Tous
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/exercice-produits?category=${encodeURIComponent(cat)}`}
            className={`px-3 py-1 rounded ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* LISTE DES PRODUITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            href={`/exercice-produits/${product.slug}`}
            key={product.slug}
            className="border p-4 rounded shadow hover:bg-gray-50 transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-2 w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-gray-700">{product.price} €</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
