import React, { } from 'react';

const CustomerTicket = ({ pending, inProgress, resolved, onStart, onComplete, status })=> {

  return (
    <div className="border-2 border-red-500 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border-2 border-green-500 md:w-[1100px] col-span-1 md:col-span-2 bg-white p-2 rounded-xl shadow">
        <h2 className="text-2xl md:text-start text-center font-semibold md:mb-4">Customer Tickets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 border-red-500">
          {pending.length === 0 && (
            <div className="col-span-2 font-bold text-gray-500">No pending tickets !!</div>
          )}

          {pending.map(ticket => (
            <div
              key={ticket.id}
              onClick={() => onStart(ticket.id)}
              className="cursor-pointer bg-gray-50 p-4 rounded-lg border hover:shadow-md transition border-4 border-green-500"
              title={status === "pending"
          ? "Click to start this ticket"
          : status === "inProgress"
          ? "Click Complete to finish this ticket"
          : ""
      }
            >
              <div className="flex flex-col md:flex-row justify-between items-start">
                <h3 className="font-semibold text-center text-gray-800">{ticket.title}</h3>
                <span className="md:text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {ticket.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {ticket.description}
              </p>

              <div className='flex flex-col md:flex-row  justify-between items-center mt-2 md:mt-4'>
                <div className="flex items-center justify-between  space-x-4 text-sm text-gray-500">
                <span className="font-medium">#{ticket.id}</span>
                <span className="uppercase text-sm font-semibold text-red-500">{ticket.priority}
                </span>
              </div>
              <div class="flex items-center justify-between space-x-4">
                    <span>{ticket.customer}</span>
                    <span><i class="fa-regular fa-calendar"></i> {ticket.createdAt}</span>
            </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl w-full mx-auto md:max-w-[350px] md:ml-30 shadow border-2 border-red-500">
        <h3 className="text-xl font-semibold mb-4">Task Status</h3>

        {inProgress.length === 0 ? (
          <p className="text-sm text-gray-500 mb-4">No in-progress tasks</p>
        ) : (
          <div className="space-y-3 md:mb-4">
            {inProgress.map(t => (
              <div key={t.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="font-medium text-gray-800">{t.title}</div>
                <button
                  onClick={() => onComplete(t.id)}
                  className="md:mt-3 w-full px-3 py-2 rounded-md bg-green-600 text-white font-medium hover:opacity-95 transition cursor-pointer"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}

        <h4 className="text-lg font-semibold md:mt-6 md:mb-3">Resolved Task</h4>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-500">No resolved tasks yet</p>
        ) : (
          <div className="space-y-3">
            {resolved.map(t => (
              <div key={t.id} className="bg-indigo-50 p-3 rounded-md text-indigo-800">
                {t.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerTicket;