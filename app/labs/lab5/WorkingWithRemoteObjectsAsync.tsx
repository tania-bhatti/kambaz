"use client"
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsynchronously(){
  const [assignment, setAssignment] = useState<{ title: string }>({title: ""});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => { fetchAssignment(); }, []);
  return (
    <div>
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input 
        value={assignment.title ?? ""}
        className="w-[400px]"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} 
      />
      <br />
      <button 
        type="button" 
        className="bg-blue-600 px-3 py-1.5 text-sm text-white mt-3"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}