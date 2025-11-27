
import Link from "next/link";

export const PRODUCTS_LIST = [
  { id: 1, name: "Laptop", category: "electronics", price: 600 },
  { id: 2, name: "Smartphone", category: "electronics", price: 400 },
  { id: 3, name: "Chaussures", category: "fashion", price: 60 },
  { id: 4, name: "T-Shirt", category: "fashion", price: 20 },
  { id: 5, name: "Sac à main", category: "fashion", price: 90 },
  { id: 6, name: "Casque audio", category: "electronics", price: 50 },
];



export default function ProductsPage({ searchParams }: any) {
  const category = searchParams.category;

  const filteredProducts = category
    ? PRODUCTS_LIST.filter((p) => p.category === category)
    : PRODUCTS_LIST;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Liste des produits</h2>

      {/* FILTRES */}
      <div className="flex gap-3 mb-5">
        <Link href="/products" className="px-3 py-1 bg-gray-300 rounded">
          Tous
        </Link>
        <Link
          href="/products?category=electronics"
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Électronique
        </Link>
        <Link
          href="/products?category=fashion"
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Mode
        </Link>
      </div>

      {/* LISTE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="border p-4 rounded shadow hover:bg-gray-50"
          >
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.price} €</p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

