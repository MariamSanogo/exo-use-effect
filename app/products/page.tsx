const PRODUCTS_LIST = [
  {
    id: 1,
    name: "Ordinateur Portable Lenovo ThinkPad X1",
    category: "Informatique",
    purchasePrice: 450000,
    salePrice: 520000,
    quantity: 12,
    description: "Ultrabook professionnel très performant.",
    createdAt: "2025-01-12T10:20:00Z",
  },
  {
    id: 2,
    name: "Smartwatch Samsung Galaxy Watch 6",
    category: "Électronique",
    purchasePrice: 120000,
    salePrice: 150000,
    quantity: 30,
    description: "Montre connectée avec suivi de santé avancé.",
    createdAt: "2025-01-14T15:33:00Z",
  },
  {
    id: 3,
    name: "Casque Bluetooth JBL Tune 510BT",
    category: "Audio",
    purchasePrice: 25000,
    salePrice: 35000,
    quantity: 45,
    description: "Casque sans fil avec basses puissantes.",
    createdAt: "2025-01-15T09:00:00Z",
  },
  {
    id: 4,
    name: "Souris Gamer Logitech G502 Hero",
    category: "Gaming",
    purchasePrice: 18000,
    salePrice: 25000,
    quantity: 20,
    description: "Souris hautes performances pour gamers.",
    createdAt: "2025-01-20T11:18:00Z",
  },
  {
    id: 5,
    name: "Chaise de Bureau Ergonomique Pro",
    category: "Mobilier",
    purchasePrice: 85000,
    salePrice: 110000,
    quantity: 10,
    description: "Chaise confortable pour travail longue durée.",
    createdAt: "2025-01-25T08:44:00Z",
  },
];

function page() {
  return (
    <div className="container mx-auto p-4">
      <div className="font-bold">Mes produits</div>

      <div className="p-4 border border-gray-300 grid grid-cols-4 gap-4">
        {PRODUCTS_LIST.map((product) => (
          <div key={product.id} className="p-4 rounded-lg bg-gray-50">
            <div className="font-bold">{product.name}</div>
            <div>{product.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
