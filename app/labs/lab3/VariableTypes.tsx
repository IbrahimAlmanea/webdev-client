export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;

  let myNumber = 1;
  let myString = 'this is my string ' + myNumber + ' and that is my number'
  let sampleCount = 42;
  let sampleLabel = "Lab 3";

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}
      <br /> <br /> <br />
      {myString}                                  <br />
      type of myString = {typeof myString}        <br />
      type of myNumber = {typeof myNumber}        
      <br /> <br /> <br />
      sampleCount = {sampleCount}                 <br />
      type of sampleCount = {typeof sampleCount}  <br />
      sampleLabel = {sampleLabel}                 <br />
      type of sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}