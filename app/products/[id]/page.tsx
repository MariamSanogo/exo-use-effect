import { PRODUCTS_LIST } from "@/app/products/page";

export default async function page({ params }: any) {
  //La page va retourner des donnees qui ne sont peut etre pas disponible au chargement => async

  //params va mettre du temps a arriver => await params

  //Params contient on {id: "12"; } et. vue qu'on a une propriété id on peut la recuperer ainsi {id} = await params

  console.log(`oK`);
  console.log(await params);
  // {id: "12", name:"Yao" }

  //{ id: '12' } => 12 => '12'
  const { id } = await params;

  const product = PRODUCTS_LIST.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Produit introuvable</div>;
  }
  return (
    <div>
      Nom : {product.name} <br />
      Description : {product.description}
      <br />
      Prix de vente : {product.salePrice}
    </div>
  );
}
