import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <span style={{marginTop:5}}>
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setGood(good + 1)}>Good</button>
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setNeutral(neutral + 1)}>Neutral</button>  
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setBad(bad + 1)}>Bad</button>
      </span>
      <br/><br/>
      <h2>Statistics</h2>      
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>      
    </div>
  )
}

export default App