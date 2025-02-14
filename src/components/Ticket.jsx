import React, { useEffect } from "react";
const Ticket = ({ ticket }) => {
  const [ticketDetails, setTicketDetails] = React.useState(null);
  useEffect(() => {
    const ticketDetails = localStorage.getItem('ticketDetails')
    console.log(ticketDetails)
    setTicketDetails(JSON.parse(ticketDetails))
  }, [])

  if (!ticket) return null;


  return (
    <>
    {ticketDetails && <div className="ticket-container text-white">
      <p className="details">Here is your ticket details:</p>
      <div className="ticket">
        <h2>🎟 Conference Ticket</h2>
        <img src={ticket.avatar} alt="Avatar" width="150" height='150px' className="block mx-auto bg-slate-500 rounded-full"/>
        <p className="mt-4"><strong>Name:</strong> {ticket.fullName}</p>
        <p><strong>Email:</strong> {ticket.email}</p>
        <p className="uppercase"><strong>Package:</strong> {ticketDetails.ticketType} - {ticketDetails.ticketNumber}</p>
      </div>
    </div>}
    </>
  );
};

export default Ticket;