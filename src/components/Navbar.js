import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import SearchForm from './SearchForm'

const Navbar = () => {
  return (
    <>
      <div className='MyNavBar'>
        <h3>
          The Cocktail DB
        </h3>
        <h3 className='NavPath'>
          <Link className='home' to='/'>Home</Link>
          <Link className='about' to='/About'>About</Link>
        </h3>
      </div>

    </>
  )
}

export default Navbar
