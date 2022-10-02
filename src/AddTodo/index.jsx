import React from 'react';
import "./AddTodo.css";
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function AddTodo() {
    const {setShowModal} = useContext(TodoContext);
    const onClickButton = () => {
        setShowModal(true);
    } 
    return (
        <React.Fragment>
            <button className='addtodo' onClick={onClickButton}>+</button>
        </React.Fragment>
    );
}

export {AddTodo};