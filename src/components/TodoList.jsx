import React from 'react';

function TodoList(props) {
    return (
        <React.Fragment>
            <ul>
                {props.children}
            </ul>
        </React.Fragment>
    );
}

export {TodoList};