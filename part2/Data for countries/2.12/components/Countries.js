import Country from './Country'

const Countries = ({countries}) => {

    if (countries.length === 0){
      return null
    }
    if (countries.length > 10){
      return (
        <p>Too many matches, specify another filter</p>
      )
    }
    if (countries.length > 1){
      return (
        countries.map(country => <p key={country.alpha2Code}>{country.name}</p>)
      )
    }
    return (
      <Country country={countries[0]} />
    )
  }

  export default Countries