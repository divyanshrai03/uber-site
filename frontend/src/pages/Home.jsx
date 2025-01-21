import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
          <img className='w-20 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='/logo'/>
           <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get started with Us</h2>
            <Link to='/login' className='w-full bg-black text-white py-3 rounded mt-5 flex items-center justify-center'>Continue</Link>
           </div>
           
        </div>
    </div>  
  )
}

export default Home