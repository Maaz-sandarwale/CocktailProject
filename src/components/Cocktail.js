import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
  return (
    <div >
      <div className='card'>
        <img src={strDrinkThumb} className='image'/>
        <section className='cardcontent'>
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`}>
        <button className='details' >Details</button>
        </Link>
       
        </section>
      
      </div>
    </div>
  )
}

export default Cocktail
