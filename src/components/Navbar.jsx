import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-6 z-50">
        <div className="text-2xl font-bold">AJOLODRINK</div>
        <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-yellow-400">About us</a></li>
            <li><a href="#recipes" className="hover:text-yellow-400">Recipes</a></li>
            <li><a href="#liquors" className="hover:text-yellow-400">Liquors</a></li>
        </ul>
        <div className="relative">
            <input 
            type="text" 
            placeholder="Search Cocktail" 
            className="py-2 px-4 rounded-full focus:outline-none bg-white text-gray-800 placeholder-gray-500"
            />
        </div>
        </nav>
    );
};

export default Navbar;