import Link from "next/link";
import { EXO_PRODUCTS_LIST } from "./products-mock";

function page() {
  return (
    <div>
      <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
        {EXO_PRODUCTS_LIST.map((product) => (
          <Link
            href={`/exercice-produits/${product.slug}`}
            className="bg-gray-100 p-4"
            key={product.slug}
          >
            <div
              className="w-full h-64 bg-center bg-cover bg-no-repeat rounded-lg "
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              role="img"
              aria-label={product.title}
            />

            <div className="font-bold text-2xl my-2">{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );

}


 function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;

  
  const filteredProducts = category
    ? EXO_PRODUCTS_LIST.filter((product) => product.category === category)
    : EXO_PRODUCTS_LIST;

  
  const categories = getCategory();

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Liste des produits</h2>

      {}
      <div className="flex gap-3 mb-5">
        <Link
          href="/exercice-produits"
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Tous
        </Link>
        {categories.map((Slug) => (
          <Link
            href={`/exercice-produits?category=${encodeURIComponent(cat)}`}
            key={Slug}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            {Slug}
          </Link>
        ))}
      </div>

      {/* LISTE DES PRODUITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            href={`/exercice-produits/${product.slug}`}
            key={product.slug}
            className="border p-4 rounded shadow hover:bg-gray-50"
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

export default page;
