import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchedName, setSearchedName ] = useState(persons)


  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.filter(item => item.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name:newName, number:newNumber}))
      setSearchedName(persons.concat({name:newName, number:newNumber}))
    }
    
  }

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const searchName = (event) => {
    setSearchedName(persons.filter(item => item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={searchName}/>
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
      <h2>Numbers</h2>
      <Users users={searchedName}/>
    </div>
  )
}

const Users = ({users}) => users.map((user, index) => <User key={index} user={user}/>)
const User = ({user}) => <div>{user.name}&ensp;{user.number}</div>
export default App