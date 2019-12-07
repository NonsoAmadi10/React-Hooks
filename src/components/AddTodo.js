import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className="add">
      <form>
        <input
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Add Todo
        </button>
      </form>
    </div>
  );
}
