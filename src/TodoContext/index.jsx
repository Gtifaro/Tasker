import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const [search, setSearch] = useState('');
    const {
        items: todos,
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('Todos_V1', []);

    const [showModal, setShowModal] = useState(false);

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
        <TodoContext.Provider 
        value={{
            error,
            loading,
            search,
            setSearch,
            todos,
            onComplete,
            onDelete,
            searchTodos,
            showModal,
            setShowModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };