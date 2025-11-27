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

export default page;
