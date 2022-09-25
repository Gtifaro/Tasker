import React from 'react';
import "./TodoCounter.css";
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function TodoCounter() {
    const {todos} = useContext(TodoContext);
    const totales = (todos) => {
        return todos.length;
    }
    const faltantes = (todos) => {
        let completados = 0;
        todos.filter((t) => t.finished===true).map((t) =>{
            return completados++;
        })
        return completados;
    }
    return (
        <React.Fragment>
            <h1 className='completed'>Has completado {faltantes(todos)} de {totales(todos)} Todos.</h1> 
        </React.Fragment>
    );
}

export {TodoCounter};