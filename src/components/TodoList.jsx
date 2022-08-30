import React from 'react';
import "../styles/TodoList.css";

function TodoList(props) {
    return (
        <React.Fragment>
            <div className='todolist'>
                <ul>
                    {props.children}
                </ul>
            </div>
        </React.Fragment>
    );
}

export {TodoList};