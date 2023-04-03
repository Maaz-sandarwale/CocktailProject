import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({passvalue}) => {
  const [search, setSearch]=useState('')  

  const handleSearch=(e)=>{
    // if (!e.target.value){
    //   console.log("inside unfined")
    //   setSearch('')
    // }else{
    //   setSearch(e.target.value)
    // }
    setSearch(e.target.value)
     
  }

  useEffect(()=>{
    console.log("passing ", search)
    passvalue(search)
  },[search])

  return (
    <div className='SearchBox'>
      <div className='SearchBoxContent'>
        <h4>Search your cocktail here</h4>
        <input type='text' className='SearchText' value={search} onChange={(e)=>handleSearch(e)}></input>
      </div>
    </div>

  )
}

export default SearchForm
