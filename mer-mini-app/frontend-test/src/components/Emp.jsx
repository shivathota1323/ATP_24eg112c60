import React from 'react'
import { useLocation } from 'react-router'

function Emp() {
  //read state recieved in navigation
  const {state}=useLocation();

  return (
    <div className='p-10 text-center text-2xl border-4 bg-blue-300 items-start'>
      <h1 className='text-3xl'>Employee Full Details:</h1><br /><br />
      <p className='text-mauve-700'>Name :     {state.name}</p><br />
      <p>Email :       {state.email}</p><br />
      <p>ph no :       {state.mobile}</p><br />
      <p>Designation :    {state.designation}</p><br />
      <p>Company Name :   {state.companyName}</p>
    </div>
  )
}

export default Emp