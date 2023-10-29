import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="flex justify-between text-2xl h-16 shadow-2xl items-center bg-secondary px-10 py-2">
            <Link to='/' className="moonchies flex justify-normal gap-2 font-thin " > <img className='w-6' src="./cookie-com.svg" alt="" />  Moonchies</Link>
            <a href="https://github.com/dablusLyes/Moonchies" target="noreferrer" >Github</a>
        </div>
    );
}

export default Navbar;
