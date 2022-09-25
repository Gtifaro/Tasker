import React,{ useContext } from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        search,
        setSearch
    } = useContext(TodoContext);
    return (
        <React.Fragment>
            <input 
                className='search'
                value={search} 
                placeholder='Hoy voy a... 🤔'
                onChange={a => setSearch(a.target.value)}
            />
        </React.Fragment>
    );
}

export {TodoSearch};