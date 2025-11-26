export default async function page({ params }: any) {
  console.log(await params);

  //{ slug: 'abc' }

  const { slug } = await params;

  return (
    <div>
      <p>miss univers : Olivia yace - {slug}</p>
    </div>
  );
}
