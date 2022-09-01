import React, { useState } from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {AddTodo} from "./components/AddTodo";
import "./styles/App.css";

function App() {

  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState(Todo);
  var Todo = [
    {text: "Comer", finished: false},
    {text: "dormir", finished: false},
    {text: "beber", finished: false},
    {text: "trabajar", finished: false}
  ]

  function searchTodos(todos){
    let todo = todos.text.toLowerCase();
    let searched = search.toLowerCase();
    return todo.includes(searched);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="content">
          <TodoCounter todos={Todo} />
          <TodoSearch
            search={search}
            setSearch={setSearch}
          />
          <TodoList>
            {search === '' ? Todo.map(todos => (
              <TodoItem key={todos.text} text={todos.text} finished={todos.finished}/>
            )) :
            Todo.filter((todo) => searchTodos(todo)).map(todos => (
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
