import React from "react";

export default function TodoItem({ todo, index, completeTodo, delTodo }) {
  return (
    <div className="list-item">
      <ul>
        <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.item}
        </li>
      </ul>
      <button class="complete" onClick={() => completeTodo(index)}>
        {" "}
        Completed{" "}
      </button>
      <button class="delete" onClick={() => delTodo(index)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
}
