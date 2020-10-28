import React from 'react';
import { useState } from 'react';
import { db } from '../firebase/firebase'

const AddSection = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const addHandler = e => {
        e.preventDefault()

        db.collection('todos').add({
            name,
            age,
        })
        props.history.push('/')
    }

    return (
        <div className="container">
            <h2>Add section</h2>
            <div className="row mt-4">
                <div className="col-lg-8 col-md-8 ">
                    <form onSubmit={addHandler}>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="form-control mb-2 "
                            placeholder="name"
                            type="text"
                        />
                        <input
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            className="form-control mb-2 "
                            placeholder="age"
                            type="number"
                        />
                        <button className="btn btn-info btn-block" >add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSection;