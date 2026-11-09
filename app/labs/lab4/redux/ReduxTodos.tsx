import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";
import type { ReduxTodo } from "./todosReducer";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Learn Mongo");
  const [editingTodo, setEditingTodo] = useState<ReduxTodo | null>(null);

  const handleSubmit = () => {
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, title }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(title));
    }
    setTitle("Learn Mongo");
  };

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        editing={editingTodo !== null}
        onTitleChange={setTitle}
        onSubmit={handleSubmit}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            onEdit={(todo) => {
              setTitle(todo.title);
              setEditingTodo(todo);
            }}
          />
        ))}
      </ul>
    </div>
  );
}