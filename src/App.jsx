import { Suspense, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CustomerTicket from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import { toast, ToastContainer } from 'react-toastify';


const fetchTickets = async() =>{
    const res = await fetch('/tickets.json')
    return res.json();
  }

const App =() => {
const [pending, setPending] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        setLoading(true);
        const data = await fetchTickets();
        setPending(data);
      } catch (err) {
        console.error("Error fetching tickets:", err);
      } finally {
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  const handleStart = (ticketId) => {
    const ticket = pending.find((t) => t.id === ticketId);
    if (!ticket) return;
    setPending((prev) => prev.filter((t) => t.id !== ticketId));
    setInProgress((prev) => [...prev, ticket]);
    toast(" Ticket added to in-progress section");
  };

  const handleComplete = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);
    if (!ticket) return;
    setInProgress((prev) => prev.filter((t) => t.id !== ticketId));
    setResolved((prev) => [...prev, ticket]);
    toast(" Ticket closed to resolved section");
  };

if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
          <span className="loading loading-infinity loading-xl"></span>
          </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className=" bg-gray-100 max-w-[1600px] mx-auto p-2">
      <div className="max-w-[1600px] mx-auto">
        <Banner inProgress={inProgress.length} resolved={resolved.length} />
          <CustomerTicket pending={pending}
          inProgress={inProgress}
          resolved={resolved}
          onStart={handleStart}
          onComplete={handleComplete}> </CustomerTicket>
      </div>
    </div>

      <Footer></Footer>
    
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
