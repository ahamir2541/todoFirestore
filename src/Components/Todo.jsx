import React from 'react';
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebase'

const Todo = ({todo}) => {

    const deleteHandler = (id) => {
        db.collection('todos').doc(id).delete()
    }

    return (
        <div className="bg-info text-dark p-3 my-2">
            <h2> {todo.name} </h2>
            <h2> {todo.age} </h2>
            <button onClick={() => deleteHandler(todo.id) } className="btn btn-danger mr-2" >Delete</button>
            <Link to={`/edit/${todo.id}`} className="btn btn-dark" >Edit</Link>
        </div>
    );
};

export default Todo;