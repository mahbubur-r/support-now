import React, { use } from 'react';
import TicketsCard from '../TicketsCard/TicketsCard';
const CustomerTickets = ({ticketsPromise, onClick}) => {
    const ticketData = use(ticketsPromise)
    // console.log(ticketData);
    
    return (
    <div>
        {/* Main section */}
        <div className='card-parent border-2 border-red-500 mt-10 max-w-[1600px]  mx-auto'>
                <h1 className='text-3xl font-bold ml-15 my-5'>Customer Tickets</h1>
        {/* Tickets Card and Ticket Status */}
        <div className='flex justify-center'>
            {/* Card Start*/}
            <div className="border-2 border-red-500 mt-10 max-w-[1600px] mx-auto grid grid-cols-2">
                {
                    ticketData.map(tickets => (
                    
                        
                    <TicketsCard tickets={tickets} onClick={onClick}></TicketsCard>))}
            </div>
            {/* Card End */}
            
        {/* Task Status Start */}
            <div className="bg-gray-100 p-8 min-h-screen"> 
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Status</h2>
        <div className="max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Failed - Card Declined </h3>
            <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200 ease-in-out">Complete</button>
        </div>

        <div className="my-10"></div> 
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resolved Task</h2>
            <div className="max-w-md bg-indigo-100 p-6 rounded-xl shadow-sm">
                <p className="text-lg font-medium text-indigo-800">Incorrect Billing Address</p>
            </div>
        </div>
        {/* Task Status End */}
        </div>
        {/* Ticket Cards and Task Status End */}
     </div>
      {/* Main section Ends*/}
   </div>
// * Main section Ends Here   

    );
};

export default CustomerTickets;