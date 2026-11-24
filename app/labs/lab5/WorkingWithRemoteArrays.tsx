"use client"
import { useState } from "react";

export default function WorkingWithRemoteArrays() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({ id: "1", title: "Task 1", completed: false, description: "Create a NodeJS server with ExpressJS" });
  return (
    <div>
      <h3>Working With Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a 
        id="wd-retrieve-todos" 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2"
        href={API}
      >
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <a 
        id="wd-retrieve-todo-by-id" 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white mt-3 me-2"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input id="wd-todo-id" value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
      />
      <h4>Filtering Array Items</h4>
      <a 
        id="wd-retrieve-completed-todos" 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a 
        id="wd-create-todo" 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <h4>Removing from an Array</h4>
      <a 
        id="wd-remove-todo" 
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white me-2"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>
      <h4>Updating an Item in an Array</h4>
      <a 
        href={`${API}/${todo.id}/title/${todo.title}`} 
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2"
        id="wd-update-todo-title"
      >
        Update Todo
      </a>
      <input value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <input value={todo.id} onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <br />
      <a 
        href={`${API}/${todo.id}/completed/${todo.completed}`} 
        className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white mt-3 me-2"
        id="wd-complete-todo"
      >
        Completed Todo ID = {todo.id}
      </a>
      <input type="checkbox" checked={todo.completed} onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
      <br />
      <a 
        href={`${API}/${todo.id}/description/${todo.description}`} 
        className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white mt-3 me-2"
        id="wd-describe-todo"
      >
        Describe Todo ID = {todo.id}
      </a>
      <input value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
    </div>
  )
}