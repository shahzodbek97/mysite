import React from 'react'
import { Link } from 'react-router-dom';

function Contact () {
    return (
        <div>
            <h2>About Pages</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Contact;