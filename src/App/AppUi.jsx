import React from 'react';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {AddTodo} from "../AddTodo";
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function AppUi(){
    const {
        loading,
        error,
        todos,
        onComplete,
        onDelete,
        search,
        searchTodos
    } = useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="container">
                <div className="content">
                <TodoCounter/>
                <TodoSearch/>
                <TodoList>
                    {loading && <p>Cargando... 🐾</p>}
                    {console.log()}
                    {(!loading && todos.length === 0 && search === '') && <p>¡Crea tú primer TODO! 🌟</p>}
                    {(!loading && todos.length === 0 && search !== '') && <p>Nada por aquí 🦗</p>}
                    {error && <p>Ha ocurrido un error :/</p>}
                    {search === '' ? 
                        todos.map(todos => (
                            <TodoItem 
                                key={todos.text} 
                                text={todos.text} 
                                finished={todos.finished}
                                onComplete={() => onComplete(todos.text)}
                                onDelete={() => onDelete(todos.text)}
                            />
                            )
                        ) :
                        todos.filter((todo) => searchTodos(todo)).map(todos => (
                            <TodoItem 
                                key={todos.text} 
                                text={todos.text} 
                                finished={todos.finished}
                                onComplete={() => onComplete(todos.text)}
                                onDelete={() => onDelete(todos.text)}
                            />
                            )
                        )
                    }
                </TodoList>
                <AddTodo/>
                </div>
            </div>
        </React.Fragment>
    );
}

export {AppUi};