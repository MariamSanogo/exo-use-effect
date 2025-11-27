import Link from "next/link";
import { PRODUCTS_LIST } from "@/app/Category/cate";

export default function ProductDetail({ params }: any) {
  const productId = Number(params.id);

  const product = PRODUCTS_LIST.find((p) => p.id === productId);

  if (!product) {
    return <h2>Produit introuvable</h2>;
  }

  return (
    <div>
      <Link href="/products" className="text-blue-600 underline mb-4 block">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-700">Prix : {product.price} €</p>
      <p className="text-gray-500 text-sm">Catégorie : {product.category}</p>
    </div>
  );
}
