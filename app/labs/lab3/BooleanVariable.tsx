export default function BooleanVariables() {
  let numberVariable = 123,
    floatingPointNumber = 234.345;
  let true1 = true,
    false1 = false;
  let false2 = true1 && false1;
  let true2 = true1 || false1;
  let true3 = !false2;
  let true4 = numberVariable === 123;
  let true5 = floatingPointNumber !== 321.432;
  let false3 = numberVariable < 100;
  let greeting1 = "hello";
  let greeting2 = "Hello";
  let false4 = greeting1 === greeting2;
  let string = "123";
  let num = 123;
  // let true6 = string == num; 
  const true7 = numberVariable !== 0;
  return (
    <div id="wd-boolean-variables">
      <h4>Boolean Variables</h4>
      true1 = {true1 + ""}
      <br />
      false1 = {false1 + ""}
      <br />
      false2 = {false2 + ""}
      <br />
      true2 = {true2 + ""}
      <br />
      true3 = {true3 + ""}
      <br />
      true4 = {true4 + ""}
      <br />
      true5 = {true5 + ""}
      <br />
      false3 = {false3 + ""}
      <br />
      false4 = {false4 + ""}
      <br />
      {/* Use == instead of === : {true6 + ""} */}
      <br />
      true7 = {true7 + ""}
      <hr />
    </div>
  );
}