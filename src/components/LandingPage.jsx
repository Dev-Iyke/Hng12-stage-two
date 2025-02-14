import React, { useState } from 'react'
import SingleTicket from './SingleTicket'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LandingPage = () => {
  const tickets = [
    {packageType: 'Free', name: 'regular access', slots: '20/52'},
    {packageType: '$100', name: 'vip access', slots: '20/52'},
    {packageType: '$150', name: 'vvip Access', slots: '20/52'},
  ]
  const [ticketNumber, setTicketNumber] = useState(1)
  const [ticketType, setTicketType] = useState('')
  console.log(ticketNumber, ticketType)

  const navigate = useNavigate()

  const handleNext = () => {
    if(ticketNumber && ticketType){
      localStorage.setItem('ticketDetails', JSON.stringify({ ticketNumber: ticketNumber, ticketType: ticketType }))
      navigate(`/details`)
    } else {
      toast('Select a ticket and number of tickets')
    }

  }

  return (
    <div className='rounded-lg shadow-md text-[#eee] w-[90%] mx-auto my-14 bg-[#041E23] p-6'>
      <div className='flex justify-between items-center py-4 border-b-2 border-[#24A0B5]'>
        <h1 className='font-serif text-4xl'>Ticket Section</h1>
        <p>Step 1/3</p>
      </div>
      <div className='rounded-lg shadow-md '>
        <div className='bg-[#07373F] p-6 my-6 text-center flex flex-col gap-1 rounded-lg'>
          <h1 className='text-4xl font-bold'>Techember Fest "25</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod quibusdam exercitationem?</p>
          <p>Zurich || March 15, 2025 || 7:00 PM</p>
        </div>
        <div className='h-1 bg-slate-800'></div>
        <div className='mt-8'>
          <p>Select Ticket Type</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 gap-4 bg-transparent'>
            {tickets.map((ticket, index) => (
              <div className='rounded-lg' onClick={() => setTicketType(ticket.name)} key={index}>
                <SingleTicket className={`${ticketType === ticket.name ? 'bg-[#24A0B5]' : ''}`} name={ticket.name} packageType={ticket.packageType} slots={ticket.slots} />
              </div>
            ))}
          </div>
          <div className='flex flex-col my-6'>
            <label className='w-full' htmlFor="ticketNum">Number of Tickets</label>
            <select className='bg-transparent shadow-md py-3' name="ticketNum" id="ticketNum" onChange={(e) => setTicketNumber(e.target.value)}>
              <option className='text-black' value={1}>1</option>
              <option className='text-black' value={2}>2</option>
              <option className='text-black' value={3}>3</option>
              <option className='text-black' value={4}>4</option>
            </select>
          </div>

          <div className='flex justify-between items-center gap-8'>
            <button className='w-full bg-transparent ring-1 rounded md py-4'>Cancel</button>  
            <button onClick={handleNext} className='w-full ring-1 text-[#eee] bg-[#24A0B5] rounded font-serif md py-4'>Next</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage