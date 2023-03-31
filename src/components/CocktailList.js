import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = ({drinks}) => {

  return (
    <div>
     {(drinks.length>0) && <div>
      {drinks.map((drink)=>{
        return <Cocktail drink={drink}/>
      })}
      </div>
      }
    </div>
  )
}

export default CocktailList
