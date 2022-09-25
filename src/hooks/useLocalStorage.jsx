import { useEffect } from 'react';
import { useState } from 'react';

function useLocalStorage(storageItem, initialValue){
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(()=>{
    setInterval(() => {
      try {
        const LS = localStorage.getItem(storageItem);
        let storageItems;
        if(!LS){
          let createLS = JSON.stringify(initialValue);
          localStorage.setItem(storageItem, createLS);
          storageItems = JSON.parse(localStorage.getItem(storageItem));
        }else{
          storageItems = JSON.parse(LS);
        }
        setItems(storageItems);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }, 1000);
  });
  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(storageItem, JSON.stringify(newItems));
  };
  return {
    items,
    saveItems,
    loading,
    error
  };
}

export { useLocalStorage };