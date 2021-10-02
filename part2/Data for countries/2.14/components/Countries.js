import Country from './Country'

const Countries = ({countries, setCountries}) => {
  let showDetails = false
  if (countries.length === 0){
      return null
   }
  if (countries.length > 10){
     return (
        <p>Too many matches, specify another filter</p>
      )
  }
  if (countries.length === 1){
      showDetails = true

  }
  return countries.map(country => <Country key={country.alpha2Code} country={country} setCountry={setCountries} showDetails={showDetails}/>)
}

  export default Countries