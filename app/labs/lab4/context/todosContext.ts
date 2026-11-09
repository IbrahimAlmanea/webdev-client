"use client";

import {
  createContext,
  createElement,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ContextTodo = {
  id: number;
  title: string;
};

type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodoTitle: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([]);
  const nextTodoId = useRef(1);

  const addTodo = (title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const id = nextTodoId.current++;
    setTodos((currentTodos) => [...currentTodos, { id, title: trimmedTitle }]);
  };

  const updateTodoTitle = (id: number, title: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodoTitle, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
