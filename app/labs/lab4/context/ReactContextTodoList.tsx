import { useState } from "react";
import { TodoProvider, useTodoContext } from "./todosContext";

function TodoList() {
  const { todos, addTodo, editTodo, deleteTodo } = useTodoContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (Context)</h3>
      <div className="mb-2">
        <input
          id="wd-context-todo-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="ms-1 rounded border px-3 py-1.5"
        />
        <button
          type="button"
          id="wd-context-add-todo"
          onClick={() => {
            if (!title.trim()) return;
            addTodo(title.trim());
            setTitle("");
          }}
          className="ms-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1">
            <input
              value={todo.title}
              onChange={(e) => editTodo(todo.id, e.target.value)}
              className="ms-1 rounded border px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="ms-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
