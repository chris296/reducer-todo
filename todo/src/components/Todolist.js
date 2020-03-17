import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from '../reducers/reducer';
import Todo from './Todo';

const Todolist = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChanges = e => {
        setNewTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', payload: newTask});
        setNewTask('');
    }

    const toggleCompleted = clickedItemId => {
        dispatch({type: 'TOGGLE_COMPLETED', payload: state.map(item => {
            if (item.id === clickedItemId) {
                return{
                    ...item,
                    completed: !item.completed
                };
            } else {
                return item;
            }
        })})
    }

    const clearCompleted = () => {
        dispatch({type: 'CLEAR_COMPLETED', payload: state.filter(item => {
            return item.completed === false;
        })})
    }
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='task' value={newTask} onChange={handleChanges}/>
                    <button>Add Task</button>
                </form>
            </div>
            <div>
                {state.map(item => (
                    <Todo key={item.id} item={item} toggleCompleted={toggleCompleted} />
                ))}
                <button onClick={clearCompleted}>Clear Completed</button>
            </div>
        </div>
    )
}

export default Todolist;