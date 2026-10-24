export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((total, n) => total + n, 0);
  const joined = numbers.reduce((text, n) => text + n, "");
  const sum1 = numbers.reduce((total, n) => total + n, 1);
  return (
    <div id="wd-reduce-function">
      <h4>Reduce Function</h4>
      sum = {sum}
      <br /> 
      sum1 = {sum1}
      <br />
      joined = {joined}
      <hr />
    </div>
  );
}