import React from 'react';
import "../styles/TodoItem.css";

function TodoItem(props) {
    return (
        <React.Fragment>
            <li className={`task ${props.finished && 'checked'}`}>
                <span className={`ready`}>✔</span>
                <p className='text'>{props.text}</p>
                <span className='delete'>🞮</span>
            </li>
        </React.Fragment>
    );
}

export {TodoItem};