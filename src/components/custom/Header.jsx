import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex items-center justify-between px-5'>
      <div className='flex items-center'>
        <img src='/logo.svg' alt='logo' className='mr-2' />
        <h2 className='font-bold font-sans'>AI Travel Planner</h2>
      </div>
      <Button>Sign In</Button>
    </div>
  )
}

export default Header