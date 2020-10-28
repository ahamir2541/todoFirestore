import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Todo from './Todo'
import { db } from '../firebase/firebase'

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {

        db.collection('todos').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                id : doc.id, 
                name: doc.data().name,
                age : doc.data().age,
             }) ))
        })

    }, [])

    return (
        <div className="container">
            <h2>Home section</h2>
            { todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            )) }
        </div>
    );
};

export default Home;