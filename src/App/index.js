import React, { useState } from "react";
import { AppUi } from "./AppUi";
import "./App.css";

function App() {

  const [search, setSearch] = useState('');
  
  var Todo = [
    {text: "Comer", finished: false},
    {text: "Dormir", finished: false}
  ]
  const [todos, setTodos] = useState(Todo);

  const onComplete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    let newTodos = [...todos];
    newTodos[index].finished = true;
    setTodos(newTodos);
  };
  const onDelete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  function searchTodos(todos){
    let todo = todos.text.toLowerCase();
    let searched = search.toLowerCase();
    return todo.includes(searched);
  }

  return (
    <AppUi
      search={search}
      setSearch={setSearch}
      todos={todos}
      onComplete={onComplete}
      onDelete={onDelete}
      searchTodos={searchTodos}
    />
  );
}

export default App;
