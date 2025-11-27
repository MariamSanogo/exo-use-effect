import { PRODUCTS_LIST } from "@/app/data/products";

export default function ProductDetail({ params }) {
  const id = Number(params.id);

  const product = PRODUCTS_LIST.find((p) => p.id === id);

  if (!product) return <div>Produit introuvable</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>

      <p className="text-lg">{product.price} FCFA</p>
      <p className="mt-2">{product.description}</p>

      <a
        href="/products"
        className="inline-block mt-6 bg-gray-700 text-white px-4 py-2 rounded"
      >
        ← Back
      </a>
    </div>
  );
}
