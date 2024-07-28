import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 p-4 mt-8">
            <div className="text-center">
                <h2 className="text-lg font-bold mb-5 text-white">JD STORE</h2>
                <ul className="flex justify-center space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">LinkedIn</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
                </ul>
            </div>
            <div className="text-center mt-4">
                <p className='text-sm text-white'>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
