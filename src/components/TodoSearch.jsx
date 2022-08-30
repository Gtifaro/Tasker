import React from 'react';
import "../styles/TodoSearch.css";

function TodoSearch(props) {
    return (
        <React.Fragment>
            <input className='search' placeholder='Hoy voy a ...'/>
        </React.Fragment>
    );
}

export {TodoSearch};