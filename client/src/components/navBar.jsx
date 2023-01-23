import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navBar">
            <Link  to='/' className="title" >MOONCHIES</Link>
            <a href="https://github.com/dablusLyes/Moonchies" target="_blank" >GITHUB</a>
        </div>
    );
}

export default Navbar;
