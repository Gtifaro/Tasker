import React, { useState } from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {AddTodo} from "./components/AddTodo";
import "./styles/App.css";

function App() {

  const [search, setSearch] = useState('');
  
  var Todo = [
    {text: "Comer", finished: false},
    {text: "Dormir", finished: false}
  ]
  const [todos, setTodos] = useState(Todo);

  const onComplete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    console.log(index);
  };
  const onDelete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    console.log(index);
  };
  function searchTodos(todos){
    let todo = todos.text.toLowerCase();
    let searched = search.toLowerCase();
    return todo.includes(searched);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="content">
          <TodoCounter todos={todos} />
          <TodoSearch
            search={search}
            setSearch={setSearch}
          />
          <TodoList>
            {search === '' ? todos.map(todos => (
              <TodoItem 
                key={todos.text} 
                text={todos.text} 
                finished={todos.finished}
                onComplete={() => onComplete(todos.text)}
                onDelete={() => onDelete(todos.text)}
              />
            )) :
            todos.filter((todo) => searchTodos(todo)).map(todos => (
              <TodoItem 
                key={todos.text} 
                text={todos.text} 
                finished={todos.finished}
                onComplete={() => onComplete(todos.text)}
                onDelete={() => onDelete(todos.text)}
              />
            ))}
          </TodoList>
          <AddTodo/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
