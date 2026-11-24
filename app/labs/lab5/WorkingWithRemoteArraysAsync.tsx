"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";
import { FaTrash } from "react-icons/fa6";
import { FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

type Todo = { id: number; title: string; completed: boolean; editing?: boolean };

export default function WorkingWithRemoteArraysAsynchronously(){
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  }; 
  const postNewTodo = async () => {
  const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message ?? error.message);
      } else {
        setErrorMessage("Unable to delete todo");
      }
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  }; 
  
  useEffect(() => { fetchTodos(); }, []);
  return (
    <div>
      <h3>Working with Arrays Asynchronously</h3> 
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <FaPlusCircle 
        onClick={createNewTodo} 
        id="wd-create-todo"
        className="cursor-pointer text-green-600 me-2" 
      />
      <FaPlusCircle 
        onClick={postNewTodo} 
        id="wd-post-todo"
        className="cursor-pointer text-blue-600" 
      />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} 
            /> 
            {todo.editing ? (
              <input 
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({...todo, title: e.currentTarget.value, editing: false});
                  }
                }}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            )}
            <FaPencilAlt 
              onClick={() => editTodo(todo)} 
              className="cursor-pointer text-blue-600 ms-2" 
            />
            <FaTrash 
              onClick={() => removeTodo(todo)} 
              id="wd-remove-todo" 
              className="cursor-pointer text-red-600 ms-1" 
            />
            <TiDelete 
              onClick={() => deleteTodo(todo)} 
              id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600" 
            /> 
          </li>
        ))}
      </ul>
    </div>
  );
}