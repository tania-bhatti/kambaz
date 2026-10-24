export default function NullUndefined() {
  const nullValue = null;
  const undefinedValue = undefined;
  let true1 = nullValue == undefinedValue;
  let false1 = nullValue === undefinedValue;
  
  return (
    <div id="wd-null-undefined">
      <h4>Null vs Undefined</h4>
      nullValue = {String(nullValue)}
      <br />
      undefinedValue = {String(undefinedValue)}
      <br />
      typeof nullValue = {typeof nullValue}
      <br />
      typeof undefinedValue = {typeof undefinedValue}
      <br />
      String(null) = {String(null)}
      <br />
      String(undefined) = {String(undefined)}
      <br />
      True = {true1 + ""}
      <br />
      False = {false1 + ""}
      <br />
      null == undefined = {String(null == undefined)}
      <br />
      null === undefined = {String(null === undefined)}
      <br />
      nullValue ?? "default" = {nullValue ?? "default"}
      <hr />
    </div>
  );
}