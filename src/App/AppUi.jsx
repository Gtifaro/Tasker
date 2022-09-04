import React from 'react';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {AddTodo} from "../AddTodo";

function AppUi({
        search={search},
        setSearch={setSearch},
        todos={todos},
        onComplete={onComplete},
        onDelete={onDelete},
        searchTodos={searchTodos},
    }){
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

export {AppUi};