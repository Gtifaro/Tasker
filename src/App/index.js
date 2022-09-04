import React, { useState } from "react";
import { AppUi } from "./AppUi";
import { useLocalStorage } from '../hooks/useLocalStorage';
import "./App.css";

// function useLocalStorage(storageItem, initialValue){
//   const LS = localStorage.getItem(storageItem);
//   let storageItems;

//   if(!LS){
//     let createLS = JSON.stringify(initialValue);
//     localStorage.setItem(storageItem, createLS);
//     storageItems = JSON.parse(localStorage.getItem(storageItem));
//   }else{
//     storageItems = JSON.parse(LS);
//   }
//   const [items, setItems] = useState(storageItems);

//   const saveTodos = (newTodos) => (
//     console.log(newTodos),
//     setItems(newTodos),
//     localStorage.setItem(storageItem, JSON.stringify(newTodos))
//   );
//   return [
//     items,
//     saveTodos
//   ]
// }

function App() {
  const [search, setSearch] = useState('');
  const [todos, saveTodos] = useLocalStorage('Todos_V1', [{text: "Comer", finished: false}]);

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
