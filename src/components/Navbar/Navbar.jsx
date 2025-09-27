import React from 'react';

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row justify-between  md:max-w-[1600px] mx-auto">
            <h2 className='font-bold text-lg text-black px-6'>CS — Ticket System</h2>
  <     div className="navbar-center flex flex-col md:flex-row md:gap-4 md:px-6">
            <ul className="menu mx-auto menu-horizontal font-bold  px-1 gap-2 md:gap-4 ">
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
            </ul>
            <button className=' text-white px-5 md:py-2 rounded-md font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><span>+</span> <span>New Ticket</span></button>
        </div>
    </div>
    );
};

export default Navbar;