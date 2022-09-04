import React from 'react';
import "./TodoItem.css";

function TodoItem(props) {
    return (
        <React.Fragment>
            <li className={`task ${props.finished && 'checked'}`}>
                <span 
                    className={`ready`}
                    onClick={props.onComplete}
                >✔</span>
                <p className='text'>{props.text}</p>
                <span 
                    className='delete'
                    onClick={props.onDelete}
                >🞮</span>
            </li>
        </React.Fragment>
    );
}

export {TodoItem};