import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">JD STORE</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                    <Link to="/contacts" className="text-white hover:text-gray-300">Contact</Link>
                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-white hover:text-gray-300 focus:outline-none">
                            Admin
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                <Link to="/admin/productList" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product List</Link>
                                <Link to="/admin/item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 2</Link>
                                <Link to="/admin/item3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dropdown Item 3</Link>
                            </div>
                        )}
                    </div>
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
                <Link to="/" className="block text-white hover:bg-blue-600 p-2">Home</Link>
                <Link to="/about" className="block text-white hover:bg-blue-600 p-2">About</Link>
                <Link to="/services" className="block text-white hover:bg-blue-600 p-2">Services</Link>
                <Link to="/contacts" className="block text-white hover:bg-blue-600 p-2">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
