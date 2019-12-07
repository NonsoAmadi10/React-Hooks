import React, { useState } from "react";

import "./App.css";

import AddTodo from "./components/AddTodo";
import Headers from "./components/Headers";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      item: "Learn Hooks",
      completed: false
    },
    {
      id: 2,
      item: "Finish Savr",
      completed: false
    },
    {
      id: 3,
      item: "Learn Redux",
      completed: true
    }
  ]);
  const delTodo = index => {
    const allTodo = [...todos];
    allTodo.splice(index, 1);
    setTodo(allTodo);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodo(newTodos);
  };

  const addTodo = item => {
    const newItem = {
      id: todos.length + 1,
      item,
      completed: false
    };
    const newTodos = [...todos, newItem];
    setTodo(newTodos);
  };
  return (
    <div>
      <Headers />
      <AddTodo addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} delTodo={delTodo} />
    </div>
  );
}

export default App;
