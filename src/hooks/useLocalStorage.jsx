import { useState } from 'react';

function useLocalStorage(storageItem, initialValue){
    const LS = localStorage.getItem(storageItem);
    let storageItems;
  
    if(!LS){
      let createLS = JSON.stringify(initialValue);
      localStorage.setItem(storageItem, createLS);
      storageItems = JSON.parse(localStorage.getItem(storageItem));
    }else{
      storageItems = JSON.parse(LS);
    }
    const [items, setItems] = useState(storageItems);

    const saveTodos = (newTodos) => (
      console.log(newTodos),
      setItems(newTodos),
      localStorage.setItem(storageItem, JSON.stringify(newTodos))
    );
    return [
      items,
      saveTodos
    ]
}

export {useLocalStorage};