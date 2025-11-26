import Image from "next/image";

export default async function Page({ params }: any) {
  console.log("OK");
  console.log(await params);

  return (
    <div className=" flex gap-4  ">
      <div className="flex gap-1 rounded-xl border">
        <div>
          <Image
            src="/1146cef7dfcc01722a423caf2ac48bf9.jpg"
            alt="photo"
            width={300}
            height={300}
          />
        </div>

        <div>
          <div>
            nom: <span className="text-font text-xl text-gray-600">clind</span>
          </div>
          <div>
            prix:
            <span className="text-font text-xl text-gray-600">5000FCFA</span>
          </div>

          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Ut deserunt alias a modi animi dignissimos quod dolorem <br />voluptatum accusantium provident nesciunt eos impedit veniam, <br />debitis omnis cumque enim aut expedita.</div>
        </div>
      </div>
    </div>
  );
}
