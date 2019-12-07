import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class Todo extends Component {
  render() {
    const { todos, completeTodo, delTodo } = this.props;
    return (
      <div className="todo-body">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            delTodo={delTodo}
          />
        ))}
      </div>
    );
  }
}
