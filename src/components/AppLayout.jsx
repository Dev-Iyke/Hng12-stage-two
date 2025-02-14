import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
const AppLayout = ({children}) => {
  return (
    <div className='bg-[#02191D]'>
      <NavBar />
      <main className='max-w-[650px] mx-auto'>
        {children}
      </main>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default AppLayout