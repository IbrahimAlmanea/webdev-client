export default function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  let todos = ["Buy milk", "Feed the pets", "Sleep", "Email the TA"];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes}     <br />
      doubles = {numberArray1.map((a) => a * 2)} <br />
      Todos:
      <ol>
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}