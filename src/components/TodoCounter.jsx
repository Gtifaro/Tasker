import React from 'react';

function TodoCounter(props) {
    let x = 0;
    let y = 0;
    props.todos.map(t =>(
        t.finished ? x++ : console.log(),
        y++
    ));
    let finish = x;
    return (
        <React.Fragment>
            <h1>Has completado {finish} de {y} Todos.</h1>
        </React.Fragment>
    );
}

export {TodoCounter};