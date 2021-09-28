import Languages from "./Languages"

const Country = ({country}) => {
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
      </div>
    )
  }

  export default Country