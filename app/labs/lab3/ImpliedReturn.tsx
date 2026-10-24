export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;
  const square = (n: number) => n * n
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  const fourSquared = square(4);
  console.log(fourTimesFive);
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4, 5) = {multiply(4, 5)}
      <br />
      divide(20, 4) = {divide(20, 4)}
      <br />
      fourSquared = {fourSquared}
      <br />
      fourSquared(4) = {square(4)}
      <hr />
    </div>
  );
}