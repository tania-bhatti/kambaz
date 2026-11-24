"use client"
import { useState } from "react";

export default function QueryParameter() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input 
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input 
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <a 
        id="wd-query-parameter-add"
        className="inline-block bg-blue-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a 
        id="wd-query-parameter-subtract"
        className="inline-block bg-red-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a 
        id="wd-query-parameter-multiple"
        className="inline-block bg-green-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} x {b}
      </a>
      <a 
        id="wd-query-parameter-divide"
        className="inline-block bg-orange-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}