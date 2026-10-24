export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable; 
  let secondString = "Good night";
  let secondNumber = 2026;
  let isStringType = typeof secondString;
  let isNumberType = typeof secondNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCountType = typeof sampleCount;
  let isSampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br /><br />
      secondString = {secondString}
      <br />
      secondNumber = {secondNumber}
      <br /> 
      isStringType = {isStringType}
      <br />
      isNumberType = {isNumberType}
      <br /><br />
      sampleCount = {sampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleCountType = {isSampleCountType}
      <br />
      isSampleLabelType = {isSampleLabelType}
      <hr />
    </div>
  );
}