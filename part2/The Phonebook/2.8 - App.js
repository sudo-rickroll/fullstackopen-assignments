import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    persons.filter(item => item.name === newName).length ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat({name:newName, number:newNumber})) 
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <Users users={persons}/>
    </div>
  )
}

const Users = ({users}) => users.map((user, index) => <User key={index} user={user}/>)
const User = ({user}) => <div style={{display:'flex'}}><p>{user.name}</p>&ensp;<p>{user.number}</p></div>
export default App