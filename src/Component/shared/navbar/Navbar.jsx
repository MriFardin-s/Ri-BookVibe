import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li> <NavLink to={'/'} className={({isActive})=> 
                isActive ? 'text-green-500 border border-green-500 ' : ''} >Home</NavLink> </li>
            <li> <NavLink to={'/books'} className={({isActive})=> isActive ? 'text-green-500 border border-green-500 ' : ''} >Listed Books</NavLink> </li>
            <li> <NavLink to={'/page-to-read'} className={({isActive})=> isActive ? 'text-green-500 border border-green-500 ' : ''} >Page To Read</NavLink> </li>

        </>
    )


    return (
        <nav>
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>
                <h2 className="font-bold text-xl ml-2">Book Vibe</h2>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-4 ">
                <button className="btn btn-success text-white">SignIn</button>
                <button className="btn btn-success text-white">SignUp</button>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;