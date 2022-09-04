import React from 'react';
import "./TodoCounter.css";

function TodoCounter(props) {
    let x = 0;
    let y = 0;
    props.todos.map(t =>(
        t.finished ? x++ : console.log(),
        y++
    ));
    return (
        <React.Fragment>
            <h1 className='completed'>Has completado {x} de {y} Todos.</h1>
        </React.Fragment>
    );
}

export {TodoCounter};