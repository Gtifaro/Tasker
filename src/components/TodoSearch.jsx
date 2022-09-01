import React from 'react';
import "../styles/TodoSearch.css";

function TodoSearch(props) {
    return (
        <React.Fragment>
            <input 
                className='search' 
                value={props.search} 
                placeholder='Hoy voy a ...'
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </React.Fragment>
    );
}

export {TodoSearch};