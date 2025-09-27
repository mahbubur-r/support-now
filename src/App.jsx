import { Suspense, useState } from 'react'
import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { toast, ToastContainer } from 'react-toastify';
// import "@fortawesome/fontawesome-free/css/all.min.css";

const fetchTickets = async() =>{
    const res = await fetch('/tickets.json')
    return res.json();
  }
// console.log(fetchTickets);
const ticketsPromise = fetchTickets()
// console.log(ticketsPromise);



function App() {

   // Start here-1
  const [inProgress, setInProgress] = useState([])
  const [resoulved, setResoulved] = useState([]);  


    const addToInProgress = (ticket) => {
    
    if (inProgress.find((t) => t.id === ticket.id) || resoulved.find((t) => t.id === ticket.id)) 
    return;
    setInProgress((inProgress) => [...inProgress, ticket]); 
    toast(" Ticket added to progress section");
  };


  const resoulvedTicket = (ticket) => {
    setInProgress((resoulve) => resoulve.filter((t) => t.id !== ticket.id));
    setResoulved((resoulve) => [...resoulve, ticket]);
    toast("Ticket remove from progress section")
  };
  // End here-1
  
  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={inProgress.length} resoulved={resoulved.length}></Banner>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-3">Task Status (In-Progress)</h2>
          {inProgress.length === 0 ? (
            <p className="text-gray-500">No tasks in progress.</p>
          ) : (
            inProgress.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => resoulvedTicket(ticket)}
                className="bg-white border rounded p-3 mb-2 shadow cursor-pointer hover:bg-green-50"
              >
                {ticket.title}
              </div>
            ))
          )}
        </div>
      <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
          <span className="loading loading-infinity loading-xl"></span>
          </div>}>
        <CustomerTickets ticketsPromise={ticketsPromise} onResoulve={resoulvedTicket} onClick={addToInProgress}></CustomerTickets>
      </Suspense>

      <Footer></Footer>
    
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
