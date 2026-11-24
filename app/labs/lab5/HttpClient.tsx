"use client"
import * as client from "./client";
import { useEffect, useState } from "react";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);
  return (
    <div>
      <h3>HTTP Client</h3>
      <h4>Requesting on Click</h4>
      <button 
        type="button" 
        className="bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p>Response from server: <b>{welcomeOnClick}</b></p>
      <h4>Requesting on Load</h4>
      <p>
        Response from server: <b>{welcomeOnLoad}</b>
      </p>
    </div>
  );
}