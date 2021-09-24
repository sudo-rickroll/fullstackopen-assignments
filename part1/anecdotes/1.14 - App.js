import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotedAnecdote, setmostVotedAnecdote] = useState('')

  const selectRandom = () => {
    let randomNumber = Math.floor(Math.random() * (anecdotes.length - 1))
    while (randomNumber === selected) {
      randomNumber = Math.floor(Math.random() * (anecdotes.length - 1))
    }
    setSelected(randomNumber)    
  }
  const voteAnecdote = () => {
    const selectedCopy = votes
    ++selectedCopy[selected]
    setVotes(selectedCopy)
    setmostVotedAnecdote(anecdotes[votes.indexOf(Math.max(...votes))])
  }

  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button style={{backgroundColor:'white', borderRadius:5, marginRight:5}} onClick={voteAnecdote}>Vote</button>
      <button style={{backgroundColor:'white', borderRadius:5}} onClick={selectRandom}>Next Anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVotedAnecdote}</p>
    </div>
  )
}

export default App