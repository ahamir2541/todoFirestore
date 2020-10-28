import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container my-3">
            <Link to='/' className="btn btn-info mr-3" >Home</Link>
            <Link to='/add' className="btn btn-info" >add</Link>
        </div>
    );
};

export default Navbar;