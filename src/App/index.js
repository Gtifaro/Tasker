import React, { useState } from "react";
import { AppUi } from "./AppUi";
import { useLocalStorage } from '../hooks/useLocalStorage';
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('Todos_V1', []);

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
      error={error}
      loading={loading}
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
