import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchedCountries, setSearchedCountries ] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
        .then(response => 
            setCountries(response.data.map(item => item)),
          response => alert(response)
        )
  }, []      
  )

  const searchCountries = (event) => {
    if (event.target.value === ''){
      setSearchedCountries([])
      return
    }
    setSearchedCountries(countries.filter(item => item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
  }
  return (
    <div>
      <div>
        find countries <input onChange={searchCountries}/>
      </div>
      <div>
        <Countries countries={searchedCountries} />
      </div>
    </div>
  )
}

export default App