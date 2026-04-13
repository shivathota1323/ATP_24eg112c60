import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex   bg-cyan-200 justify-between'>
        <img className='w-17 rounded-3xl mt-4 mb-4 ml-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmhZ6oIS_HqDDhV30_twjLf6_iVsYhRDoLw&s" alt="cant load image " />
        <nav className='flex p-5 justify-end gap-5 text-3xl'>
            <NavLink to="">Home</NavLink>
            <NavLink to="register">Register</NavLink>
            <NavLink to="login">Login</NavLink>
        </nav>
    </div>
  )
}

export default Header