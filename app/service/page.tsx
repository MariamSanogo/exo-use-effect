
import Link from "next/link";
function page() {
  return (
    <div className="p-4">
      <div>
        <h1>Avec HTML CLASSIQUE</h1>
        <a href="/service">Page service</a> <br />
        <a href="/blog">Page blog</a>
        <br />
        <a href="/news">Page news</a> <br />
        Avec Next JS (LINK)
        <br />
        <Link href={"/service"}>Page service</Link>
      </div>
    </div>
  );
}

export default page;
