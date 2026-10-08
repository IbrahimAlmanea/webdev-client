export default async function Home({params,}: {params: Promise <{cid: String}>;}) {
     const { cid } = await params;
    return (
    <div id="wd-home">
      <h2>Home {cid}</h2>
    </div>
  );
}