import React from 'react';
import "./TodoList.css";

function TodoList(props) {
    return (
        <React.Fragment>
            <div className='todolist'>
                <ul className='list'>
                    {props.children}
                </ul>
            </div>
        </React.Fragment>
    );
}

export {TodoList};