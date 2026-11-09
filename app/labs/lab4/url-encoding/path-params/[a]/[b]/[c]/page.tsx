export default async function PathCalculator({
  params,
}: {
  params: Promise<{ a: string; b: string; c: string }>;
}) {
  const { a, b, c } = await params;
  const sum = parseFloat(a) + parseFloat(b) + parseFloat(c);

  return (
    <div id="wd-path-calculator">
      <h1>Calculator – Path Parameters</h1>
      <p>
        a = <code>{a}</code>
      </p>
      <p>
        b = <code>{b}</code>
      </p>
      <p>
        c = <code>{c}</code>
      </p>
      <h2 className="text-green-700">Sum = {sum}</h2>
    </div>
  );
}
