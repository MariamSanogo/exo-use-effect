export const article = [
  {
    title: "L’intelligence artificielle au service du quotidien",
    slug: "intelligence-artificielle-service-quotidien",
    prix: "15 000 FCFA",
    detail: "Un article complet sur l’impact de l’IA.",
  },
  {
    title: "5 techniques pour améliorer la performance de vos applications web",
    slug: "ameliorer-performance-applications-web",
    prix: "12 000 FCFA",
    detail: "Optimisation, performance et bonnes pratiques.",
  },
  {
    title: "Pourquoi apprendre Flutter en 2025 ?",
    slug: "pourquoi-apprendre-flutter-2025",
    prix: "10 000 FCFA",
    detail: "Les avantages de Flutter pour les développeurs.",
  },

];

function page (){
    return (
      <div className="container max-auto px-4">
        <p className="font-semibold">Mes article</p>
        <div className="p-4 border border-gray-500 grid grid-cols-4 gap-4">
          {article.map((item) => (
            <div key={item.slug} className="p-4 rounded-lg bg-gray-50">
              <div className="font-bold">{item.prix}</div>
              <div>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default page
