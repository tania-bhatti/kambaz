import { createContext, createElement, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: string;
  title: string;
};

type TodoContextValue = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  deleteTodo: (id: string) => void;
  addTodo: (title: string) => void;
  editTodo: (id: string, title: string) => void; 
};

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (title: string) => {
    setTodos([...todos, {id: title, title}]);
  };
  const editTodo = (id: string, title: string) => {
    setTodos(todos.map(t => (t.id === id ? {...t, title} : t)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return createElement(TodoContext.Provider, { value: { todos, setTodos, addTodo, editTodo, deleteTodo } }, children);
}

export function useTodoContext() { 
  const value = useContext(TodoContext);
  if (!value) {
    throw new Error("useTodoContext must be used inside TodoProvider"); 
  }
  return value;
}

