import Link from "next/link";
function page() {
  return (
    <div className="p-2">
      <p>blog</p>
      <div>
        <Link href={"/service"}></Link>
      </div>
    </div>
  );
}

export default page;
