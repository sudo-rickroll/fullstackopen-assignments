import React, { useState } from 'react'
import Users from './components/Users'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchedNames, setSearchedNames ] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault()
    persons.filter(item => item.name === newName).length > 0 ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat({name:newName, number:newNumber}))     
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