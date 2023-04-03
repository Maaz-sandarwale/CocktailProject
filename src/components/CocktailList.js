import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = ({ drinks }) => {

  return (
    <div  >

      {(drinks.length > 0) && <div>
        <h3 className='cocktailhead'>Cocktails</h3>
        <div  className='cards'>
          {drinks.map((drink) => {
            return <Cocktail drink={drink} />
          })}
        </div>

      </div>
      }
    </div>
  )
}

export default CocktailList
