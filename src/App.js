import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {AddTodo} from "./components/AddTodo";
import "./styles/App.css";

function App() {

  var Todos = [
    {text: "Comer", finished: false},
    {text: "Dormir", finished: false}
  ]

  return (
    <React.Fragment>
      <div className="container">
        <div className="content">
          <TodoCounter todos={Todos} />
          <TodoSearch/>
          <TodoList>
            {Todos.map(todos => (
              <TodoItem key={todos.text} text={todos.text} finished={todos.finished}/>
            ))}
          </TodoList>
          <AddTodo/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
