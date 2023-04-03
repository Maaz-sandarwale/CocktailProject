import React, { useState, useEffect } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='



const Home = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchvalue, setSearchValue] = useState('A')
  const passvalue = (passvalue) => {
    console.log("pass value 12", searchvalue)
    // setSearchValue(passvalue)
  }

  const getData = async () => {
    const data = await axios.get(url).then((res) => res.data)
    setData(data.drinks)
    setFilteredData(data.drinks)
  }


  useEffect(() => {
    passvalue()
    if (!searchvalue) return
    const searchdata = data.filter((item) => {
      return item.strDrink==searchvalue
      //  return item.strDrink.toLowerCase().includes(searchvalue.toLowerCase())
    })
    setFilteredData(searchdata)
  }, [searchvalue])


  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      <SearchForm passvalue={passvalue} />
      <CocktailList drinks={filteredData} />
    </div>
  )
}

export default Home
