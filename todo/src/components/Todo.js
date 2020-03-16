import React from 'react';

const Todo = props => {
    return (
        <div onClick={() => props.toggleCompleted(props.item.id)}
        className={`task${props.item.completed ? 'completed' : ''}`}>
            <p>{props.item.item}</p>
        </div>
    )
}

export default Todo;