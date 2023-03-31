import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({passvalue}) => {
  const [search, setSearch]=useState('')
  console.log(search)
   
  const sendSearch=(e)=>{
    setSearch(e.target.value)
    passvalue(search)
  }
  return (
    <div className='SearchBox'>
      <div className='SearchBoxContent'>
        <h4>Search your cocktail here</h4>
        <input type='text' className='SearchText' value={search} onChange={(e)=>sendSearch(e)}></input>
      </div>
    </div>

  )
}

export default SearchForm
