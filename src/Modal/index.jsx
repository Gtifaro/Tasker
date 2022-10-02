import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { useState } from 'react';

function Modal() {
    const {setShowModal,onAddTodo} = useContext(TodoContext);
    const [newTodoText, setNewTodoText] = useState();

    const onChange =(event) =>{
        setNewTodoText(event.target.value);
    }
    
    const onSubmit = () => {
        onAddTodo(newTodoText);
        setShowModal(false);
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className='modal-container'>
                <div className='modal-box'>
                    <input type="text" onChange={onChange}/>
                    <div>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                        <button onClick={onSubmit}>Agregar</button>
                    </div>
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal')
    );
}

export { Modal };