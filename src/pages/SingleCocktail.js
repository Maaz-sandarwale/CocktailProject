import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [urlData, setUrlData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams();

  const Getdatas = async () => {
    const ids = await axios.get(url + id).then((res) => res.data)
    setUrlData(ids.drinks)
    setIsLoading(false)
  }

  useEffect(() => {
    Getdatas()
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <div >

        <Link to="/"><p className="backhome">Back Home</p></Link>
        {urlData.length > 0 &&
          <div>
            {urlData.map((item) => {
              return (
                <div className='singlecocktail'>
                  <img src={item.strDrinkThumb} className='imagesingle'></img>
                  <div className='singlecontent'>
                    <p>
                      <span className='drink-data'>name :</span> {item.strDrink}
                    </p>
                    <p>
                      <span className='drink-data'>Category:</span>  {item.strCategory}
                    </p>
                    <p>
                      <span className='drink-data'>Info: </span> {item.strAlcoholic}
                    </p>
                    <p>
                      <span className='drink-data'>Glass: </span>   {item.strGlass}
                    </p>
                    <p>
                      <span className='drink-data'> InstructionsInstructions:  </span>
                      {item.strInstructions}
                    </p>
                    <p>
                      <span className='drink-data'> Ingredient: </span> {item.strIngredient1}
                    </p>
                  </div>
                </div>
              )
            })}

          </div>
        }
      </div>
    </>
  )

}

export default SingleCocktail
