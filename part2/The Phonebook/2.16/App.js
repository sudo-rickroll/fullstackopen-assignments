import React, { useState, useEffect } from 'react'
import Users from './components/Users'
import service from './services/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchedNames, setSearchedNames ] = useState([])

  useEffect(() => {
    service.getPersons().then(persons => setPersons(persons)).catch(error => alert("Could not fetch person details ", error))
  }, []      
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.filter(item => item.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {name:newName, number:newNumber}
    service.createPerson(personObject).then(newPerson => setPersons([...persons, newPerson])).catch(error => alert("Could not create person ", error))
    
    
         
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const searchName = (event) => {
    if (event.target.value === ''){
      setSearchedNames([])
      return
    }
    setSearchedNames(persons.filter(item => item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        filter shown with <input onChange={searchName}/>
        <br /><br />
      </div>
      <div>
        <Users users={searchedNames} />
      </div>
      <div>
        <h2>add a new</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={onChangeName} />
          </div>
          <div>
            number: <input value={newNumber} onChange={onChangeNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <Users users={persons}/>
      </div>
    </div>
  )
}

export default App