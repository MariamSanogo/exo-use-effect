"use client";

import { useState } from "react";

function Somme() {
  const numbers = [2, 5, 8, 3, 9];
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const products = numbers.reduce((acc, n) => acc * n, 1);
  const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0]);
  console.log(sum);
  console.log(products);
  console.log(max);
}

Somme();

function Slugp() {
  const posts = [
    { title: "Introduction à React" },
    { title: "Découvrir Next.js" },
    { title: "Apprendre TypeScript" },
  ];
  const parcour = posts.map((post) => ({
    title: post.title,
    slug: post.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""),
  }));

  console.log(parcour);
}

Slugp();

function Tableaumul() {
  const numbers = [1, 2, 3, 4];
  const tableaumembers = numbers.map((number) => number * 2);

  console.log(tableaumembers);
}

Tableaumul();

function Promo() {
  const articles = [
    { title: "Chaussures", promo: true },
    { title: "Chemise", promo: false },
    { title: "Pantalon", promo: true },
  ];

  const articlesEnPromo = articles.filter((article) => article.promo);

  console.log(articlesEnPromo);
}

Promo();

function Notes() {
  const notes = [12, 5, 17, 3, 14];

  const notesValides = notes.filter((note) => note >= 10);

  console.log(notesValides);

  return notesValides;
}

Notes();

function ProduitR() {
  const products = [
    { name: "Pain", stock: 10 },
    { name: "Sucre", stock: 0 },
    { name: "Lait", stock: 25 },
  ];

  const outOfStockProduct = products.find((p) => p.stock === 0);

  console.log(outOfStockProduct);

  return outOfStockProduct;
}

ProduitR();

function Users() {
  const users = [
    { id: 1, name: "Awa", email: "awa@example.com" },
    { id: 2, name: "Koffi", email: "koffi@example.com" },
    { id: 3, name: "Sarah", email: "sarah@example.com" },
  ];
  const emailfind = users.find((u) => u.email === "koffi@example.com");
  return (
    <div>
      {emailfind ? (
        <div>
          <p>id:{emailfind.id}</p>
          <p>nom:{emailfind.name}</p>
          <p>email: {emailfind.email}</p>
        </div>
      ) : (
        <p>utilisateurs non trouve</p>
      )}
    </div>
  );
}

function Statue({ name, isligne }: { name: string; isligne?: boolean }) {
  return (
    <div>
      <p>
        {" "}
        bonjour {name} {isligne ? "vous etes en ligne" : "vous n'est pas ligne"}
      </p>
    </div>
  );
}

function Statue2({ name, ligne }: { name: string; ligne: boolean }) {
  if (ligne) {
    return (
      <div>
        <p>
          bonjour{name},{"vous etes en ligne"}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          bonjour {name},{"vous n'est pas en ligne"}
        </p>
      </div>
    );
  }
}

function WelcomeMessage({
  name,
  isNumber,
}: {
  name: string;
  isNumber?: boolean;
}) {
  return (
    <div>
      <p>
        bonjour {name},
        {isNumber ? "vous etes un membre" : "vous n'est pas un membre"}{" "}
      </p>
    </div>
  );
}

function Funmessage({ name }: { name: string }) {
  const [connected, setConnected] = useState(false);

  return (
    <div>
      <p>
        Bonjour {name},{" "}
        {connected ? "vous êtes connecté" : "vous n'êtes pas connecté"}
      </p>

      <button onClick={() => setConnected(!connected)}>
        {connected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

function AgeComp({ datenaissance }: { datenaissance: number }) {
  const age = 2025 - datenaissance;
  return <div>Vous avez {age} ans</div>;
}

function Usecard({ name, age }: { name: string; age?: number }) {
  return (
    <div>
      <p>
        Bonjour {name}, {age ? age + "ans" : "âge non rensigné"}
      </p>
    </div>
  );
}

function Counter({ count }: { count: number }) {
  const [Counte, setCounte] = useState<number>(count);

  return (
    <div>
      <h2>Compteur : {Counte}</h2>

      <div>
        <input
          type="number"
          value={Counte}
          onChange={(e) => setCounte(Number(e.target.value))}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCounte(Counte + 1)}>+1</button>{" "}
        <button onClick={() => setCounte(Counte - 1)}>-1</button>
      </div>
    </div>
  );
}
/*function UserCard2({ name, age }: { name: string; age?: number }) {
  return (
    <div>
      bonjour {name}, {age ? "Vous avez " + age : "Age non renseigne"}
    </div>
  );
}  */

function DisplayResult({
  nom,
  age,
  isWoman,
}: {
  nom: string;
  age: number;
  isWoman: boolean;
}) {
  return (
    <div>
      {nom}, {age} ans —{" "}
      {isWoman ? "Vous êtes une femme" : "Vous êtes un homme"}
    </div>
  );
}

function ProductInfo({
  price,
  reduction,
  isValid,
}: {
  price: number;
  reduction: number;
  isValid: boolean;
}) {
  const prixFinal = price - (price * reduction) / 100;

  return (
    <div>
      <p>Prix initial : {price} FCFA</p>
      <p>Réduction : {reduction}%</p>
      <p>Prix final : {prixFinal} FCFA</p>
      <p>{isValid ? "La promotion est valable" : "La promotion est expirée"}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <AgeComp datenaissance={2000} />

      <DisplayResult nom="Mariam" age={20} isWoman={true} />
      <DisplayResult nom="Tenma" age={25} isWoman={false} />

      <ProductInfo price={10000} reduction={20} isValid={true} />
      <ProductInfo price={5000} reduction={10} isValid={false} />
      <Usecard name="Mariam" age={20} />
      <Usecard name="Paul" />
      <Counter count={0} />
      <Funmessage name="Mariamnp" />
      <WelcomeMessage name="Mariam" isNumber={true} />
      <WelcomeMessage name="Paul" />
      <Statue name="Paul" isligne={true} />
      <Statue name="Mariam" />

      <Statue2 name="Paul" ligne={true} />
      <Statue2 name="Mariam" ligne={false} />
      <Users />
    </div>
  );
}
