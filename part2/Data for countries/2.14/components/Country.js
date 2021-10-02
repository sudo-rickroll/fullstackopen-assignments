import Languages from "./Languages"
import Weather from "./Weather"

const Country = ({country, setCountry, showDetails}) => {
    
    if (showDetails){
        return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
            <Languages languages={country.languages} />
            </ul>
            <img src={country.flag || country.flags[0]} alt={country.name} />
            <Weather country={country.name} />
        </div>
        )
    }
    return (
        <div style ={{alignItems:'center', display:'flex'}} key={country.alpha2Code}><p>{country.name}</p>&ensp;<input type='button' value="show" onClick={() => setCountry([country])} /></div>
    )
  }

  export default Country