import React from 'react';

const Footer = () => {
    return (
    <div className='border-2 border-red-500 text-white bg-[#000000] mt-10 max-w-[1600px] h-[430px] mx-auto'>
     <div className=' flex justify-around'>
            <div className='w-[350px] mt-10'>
                <h1 className='font-bold'>CS — Ticket System</h1>
                 <p className='text-[#a1a1aa]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>  
        <div className='footer-card w-[120px] mt-10'>
            <h2 className='font-bold'>Company</h2>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>About Us</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Our Mission</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Contact Saled</p>
        </div>
        <div className='footer-card w-[120px] mt-10'>
            <h2 className='font-bold'>Services</h2>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Products & Services</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Customer Stories</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Download Apps</p>
        </div>
        <div className='footer-card w-[120px] mt-10'>
            <h2 className='font-bold'>Information</h2>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Privacy Policy</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Terms & Conditions</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>Join Us</p>
        </div>
        <div className='footer-card w-[170px] mt-10'>
            <h2 className='font-bold'>Social Links</h2>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>
                <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>
                <i class="fa-brands fa-linkedin"></i> @CS — Ticket System</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>
                <i class="fa-brands fa-facebook"></i> @CS — Ticket System</p>
            <p className='font-light text-[#a1a1aa] text-sm mt-2'>
                <i class="fa-regular fa-envelope"></i> support@cst.com</p>
        </div>
     </div>
        <div className='mt-20 h-[100px]'>
            <div class="border-t border-gray-700 max-w-[1600px] mx-auto"></div>
             <p className='text-[#fafafa] font-light text-center mt-10 py-3'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    </div>
    );
};

export default Footer;