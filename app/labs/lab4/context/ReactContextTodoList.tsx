"use client";

import { useState, type FormEvent } from "react";
import { TodosProvider, useTodosContext } from "./todosContext";

function TodoList() {
  const [newTitle, setNewTitle] = useState("");
  const { todos, addTodo, updateTodoTitle, deleteTodo } = useTodosContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTitle);
    setNewTitle("");
  };

  return (
    <div id="wd-react-context-todo-list" className="mt-4">
      <h3>Todo List with Context</h3>
      <form onSubmit={handleSubmit} className="mb-3 flex max-w-xl gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
          placeholder="New todo title"
          className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-context-todo-new-title"
        />
        <button
          type="submit"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-context-todo-add"
        >
          Add
        </button>
      </form>
      <ul className="max-w-xl list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex items-center gap-2">
            <input
              type="text"
              value={todo.title}
              onChange={(event) =>
                updateTodoTitle(todo.id, event.target.value)
              }
              aria-label={`Edit todo ${todo.title}`}
              className="min-w-0 flex-1 rounded border border-neutral-300 px-3 py-1.5"
              id={`wd-context-todo-title-${todo.id}`}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              id={`wd-context-todo-delete-${todo.id}`}
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
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}
