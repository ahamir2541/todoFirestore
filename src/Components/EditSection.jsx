import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'

const EditSection = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    let history = useHistory()
    let { id } = useParams()

    useEffect(() => {

        db.collection('todos').doc(id).onSnapshot(snapshot => {
            setName(snapshot.data().name)
            setAge(snapshot.data().age)
        })

    }, [id])

    const editHandler = e => {
        e.preventDefault()

        db.collection('todos').doc(id).set({
            name,
            age,
        })
        history.push('/')
    }

    return (
        <div className="container">
            <h1>Edit section</h1>
            <div className="row mt-4">
                <div className="col-lg-8 col-md-8 ">
                    <form onSubmit={editHandler}>
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
                        <button className="btn btn-info btn-block" >Edit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditSection;