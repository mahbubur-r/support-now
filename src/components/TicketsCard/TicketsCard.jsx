import React from 'react';

const TicketsCard = ({tickets, onClick}) => {
    return (
                <div key={tickets.id}
            onClick={() =>  onClick(tickets)} className="c-part-1 border-3 border-red-500 max-w-[550px] max-h-[175px] ml-3 mt-3 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-900 pr-4">{tickets.title}</h3>
                <div class="flex-shrink-0 bg-green-100 text-green-700 text-sm font-medium px-3  py-1 rounded-full whitespace-nowrap">{tickets.status}
                </div>
            </div>

            <p class="c-part-2 text-gray-600 mb-4 line-clamp-2">{tickets.description}</p>

            <div class="c-part-3 flex justify-between items-center text-sm text-gray-500">
                <div class="flex items-center space-x-4">
                    <span class="font-mono text-gray-600">{tickets.id}</span>
                    <span class="font-bold text-red-600 tracking-wider">{tickets.priority}</span>
                </div>
                
                <div class="flex items-center space-x-4">
                    <span>{tickets.customer}</span>
                    <span><i class="fa-regular fa-calendar"></i>{tickets.createdAt}</span>
                </div>
            </div>

        </div>
        
    );
};

export default TicketsCard;