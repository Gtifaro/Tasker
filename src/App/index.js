import React, { useState } from "react";
import { AppUi } from "./AppUi";
import "./App.css";

function App() {

  const [search, setSearch] = useState('');
  
  var Todo = [
    {text: "Comer", finished: false},
    {text: "Dormir", finished: false}
  ]

  const LS = localStorage.getItem('Todos_V1');
  let storageTodos;

  if(!LS){
    let createLS = JSON.stringify([
      {text: "Comer", finished: false},
      {text: "Dormir", finished: false}
    ]);
    localStorage.setItem('Todos_V1', createLS);
    storageTodos = JSON.parse(localStorage.getItem('Todos_V1'));
  }else{
    storageTodos = JSON.parse(LS);
  }

  const [todos, setTodos] = useState(storageTodos);

  const saveTodos = (newTodos) => (
    setTodos(newTodos),
    localStorage.setItem('Todos_V1', JSON.stringify(newTodos))
  );

  const onComplete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    let newTodos = [...todos];
    newTodos[index].finished = true;
    saveTodos(newTodos);
  };
  const onDelete = (text) => {
    let index = todos.findIndex(t => t.text===text);
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
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
