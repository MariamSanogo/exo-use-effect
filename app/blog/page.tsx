import Link from "next/link";
function page() {
  return (
    <div>
      <div className="p-6">
        <p>page blog</p>
        <Link href={"/about"}>about</Link> <br />
        <Link href={"/blog"}>blog</Link> <br />
        <Link href={"/news"}>news</Link> <br />
        <Link href={"/contact"}>contact</Link> <br />
      </div>
    </div>
  );
}

export default page;
