import { EXO_PRODUCTS_LIST } from "@/app/exercice-produits/products-mock";

async function page({ params }: any) {
  const { slug } = await params;

  const product = EXO_PRODUCTS_LIST.find((product) => product.slug === slug);

  console.log(product);
  return (
    <div>
      <h1>Info du produit</h1>
      <div>
        {product?.title}
        {product?.price}
      </div>
    </div>
  );
}

export default page;
