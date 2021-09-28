import Country from './Country'

const Countries = ({countries}) => {

    const details = (country, event) => {
        if (event.target.value === 'show'){
            event.target.value = 'hide'
        }
        else{
            event.target.value = 'show'
        }
    }

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
        countries.map(country => <div style ={{alignItems:'center', display:'flex'}}><p key={country.alpha2Code}>{country.name}</p>&ensp;<input type='button' value="show" onClick={(event) => details(country, event)} /></div>)
      )
    }
    return (
      <Country country={countries[0]} />
    )
  }

  export default Countries