import React, { useState, useEffect } from 'react'
import Users from './components/Users'
import Notification from './components/Notification'
import service from './services/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchedNames, setSearchedNames ] = useState([])
  const [ notificationMessage, setNotificationMessage ] = useState({})

  useEffect(() => {
    service.getPersons().then(persons => setPersons(persons)).catch(error => alert("Could not fetch person details: ", error))
  }, []      
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {name:newName, number:newNumber}
    if (persons.filter(item => item.name.toLowerCase().trim() === newName.toLowerCase().trim()).length > 0) {
      if(window.confirm(`${newName} is already added to phonebook. Do you want to replace it with the current details ?`)){
        const id = persons.find(item => item.name.toLowerCase().trim() === newName.toLowerCase().trim()).id
        service.updatePerson(id, personObject).then(newPerson => {
          setPersons(persons.reduce((newValue, item) => newPerson.id === item.id ? [...newValue, newPerson] : [...newValue, item], []))
          setNotificationMessage({success:`${newName} updated successfully`})
          setTimeout(() => setNotificationMessage({}), 5000)
        }).catch(error => {
          service.getPersons().then(persons => setPersons(persons)).catch(error => alert("Could not fetch person details: ", error))
          setNotificationMessage({error:`Error updating ${newName}: ${error}`})
          setTimeout(() => setNotificationMessage({}), 5000)
        })
      }
      return
    }
    
    service.createPerson(personObject).then(newPerson => {
      setPersons([...persons, newPerson])
      setNotificationMessage({success:`${newName} created successfully`})
      setTimeout(() => setNotificationMessage({}), 5000)
    }).catch(error => {
      service.getPersons().then(persons => setPersons(persons)).catch(error => alert("Could not fetch person details: ", error))
      setNotificationMessage({error:`Error updating ${newName}: ${error}`})
      setTimeout(() => setNotificationMessage({}), 5000)
    })  
  }

  const handleDelete = (id) => {
    const name = persons.find(person => person.id === id).name
    service.deletePerson(id).then(() => {      
      setPersons(persons.filter(person => person.id !== id))
      setSearchedNames(searchedNames.filter(person => person.id !== id))
      setNotificationMessage({success:`${name} deleted successfully`})
      setTimeout(() => setNotificationMessage({}), 5000)
    }).catch(error => {
      service.getPersons().then(persons => setPersons(persons)).catch(error => alert("Could not fetch person details: ", error))
      setNotificationMessage({error:`${name} has already been deleted`})      
      setTimeout(() => setNotificationMessage({}), 5000)
    })
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
        <Notification message={notificationMessage} />
        filter shown with <input onChange={searchName}/>
        <br /><br />
      </div>
      <div>
        <Users users={searchedNames} onDelete={handleDelete}/>
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
        <Users users={persons} onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App