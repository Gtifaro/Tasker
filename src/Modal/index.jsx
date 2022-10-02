import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({children}) {
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className='modal-container'>
                <div className='modal-box'>
                    {children}
                </div>
            </div>
        </React.Fragment>,
        document.getElementById('modal')
    );
}

export { Modal };