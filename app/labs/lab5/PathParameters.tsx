"use client"
import { useState } from "react";

export default function PathParamters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
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
        id="wd-path-parameter-add"
        className="inline-block bg-blue-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a 
        id="wd-path-parameter-subtract"
        className="inline-block bg-red-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a 
        id="wd-path-parameter-multiple"
        className="inline-block bg-green-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} x {b}
      </a>
      <a 
        id="wd-path-parameter-divide"
        className="inline-block bg-orange-600 text-white rounded py-2 px-3 mt-3 me-2"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}