import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({drink}) => {
  return (
    <div>
      <h2>cocktail component</h2>
      <div>
        {drink.strAlcoholic}
      </div>
    </div>
  )
}

export default Cocktail
