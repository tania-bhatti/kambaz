"use client"
import { useState } from "react";
import * as client from "./client";

const symbols: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState<number | string>("");
  const calculate = async () => {
    const data = await client.fetchCalc(a, b, operation);
    setResult(data.error ?? data.result);
  };
  return (
    <div>
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="wd-calc-a">A:</label>
      <input 
        type="number"
        id="wd-calc-a"
        value={a}
        placeholder="A"
        onChange={(e) => setA(Number(e.target.value))}
      />
      <br />
      <label htmlFor="wd-calc-b">B:</label>
      <input 
        type="number"
        id="wd-calc-b"
        value={b}
        placeholder="B"
        onChange={(e) => setB(Number(e.target.value))}
      />
      <br />
      <label htmlFor="wd-calc-operation">Operation:</label>
      <select 
        name="operation" 
        id="wd-calc-operation"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <br />
      <button 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        type="button"
        onClick={calculate}
      >
        Calculate
      </button>
      {result !== "" && (
        <div>
          {typeof result === "string" ? result : `Result: ${a} ${symbols[operation]} ${b} = ${result}`}
        </div>
      )}
      <hr />
    </div>
  );
}