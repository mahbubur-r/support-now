import React from 'react';

const Navbar = () => {
    return (
    <div className="border-2 border-red-500 navbar bg-base-100 shadow-sm flex justify-between  max-w-[1600px] mx-auto">
        <div className="navbar-start">
            <h2 className='font-bold text-lg text-black px-6'>CS —— Ticket System</h2>
        </div>
  <     div className="navbar-center hidden lg:flex gap-4 px-6">
            <ul className="menu menu-horizontal px-1 gap-4 ">
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
            </ul>
            <button className=' text-white px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><span>+</span> <span>New Ticket</span></button>
        </div>
    </div>
    );
};

export default Navbar;