import React from 'react'

const SingleTicket = (props) => {
  const {packageType, name, slots, className} = props
  return (
    <div className={`${className} p-6 md:p-8 text-[#eee] bg-[#052228] rounded-lg shadow-md`}>
      <h2 className='text-2xl font-semibold'>{packageType}</h2>
      <p className='text-xl uppercase'>{name}</p>
      <p className='text-lg'>{slots}</p>
    </div>
  )
}

export default SingleTicket