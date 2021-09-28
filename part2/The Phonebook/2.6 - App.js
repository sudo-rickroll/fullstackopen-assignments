import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name:newName}))
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={onChangeName} />
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
const User = ({user}) => <p>{user.name}</p>

export default App