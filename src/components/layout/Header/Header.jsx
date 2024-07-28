import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to={'/'}>JD STORE</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <Link to={'/contacts'} className="text-white hover:text-gray-300">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="#" className="block text-white hover:bg-blue-600 p-2">Home</a>
                <a href="#" className="block text-white hover:bg-blue-600 p-2">About</a>
                <a href="#" className="block text-white hover:bg-blue-600 p-2">Services</a>
                <a href="#" className="block text-white hover:bg-blue-600 p-2">Contact</a>
            </div>
        </nav>
    );
};

export default Header;
