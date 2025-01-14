import React from 'react'
import Menu from './Menu/indes'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='h-20 p-6 flex items-center gap-4'>
      <Menu />
      <div className='flex items-center'>
        <Link to="/">
        <h1 className='uppercase text-xl'>Team Louvor Vila da Penha</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
