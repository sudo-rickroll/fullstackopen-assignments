import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = () => good + bad + neutral
  const average = () => ((good * 1) + (neutral * 0) + (bad * -1)) / all()
  const positive = () => good * 100 / all()
  return (
    <div>
      <h2>Give Feedback</h2>
      <span style={{marginTop:5}}>
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setGood(good + 1)}>Good</button>
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setNeutral(neutral + 1)}>Neutral</button>  
        <button style={{marginRight:5, backgroundColor:'white'}} onClick={()=>setBad(bad + 1)}>Bad</button>
      </span>
      <br/><br/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />      
    </div>
  )
}

const Statistics = ({good, bad, neutral, all, average, positive}) => {
  if(good || bad || neutral){
    console.log(typeof(good))
    console.log(typeof(all))
    return(
      <>
        <h2>Statistics</h2>              
        <StatisticLine text='Good' metric={good} />
        <StatisticLine text='Neutral' metric={neutral} />
        <StatisticLine text='Bad' metric={bad} />
        <StatisticLine text='All' metric={all()} />
        <StatisticLine text='Average' metric={average()} />
        <StatisticLine text='Positive' metric={positive()} />
      </>
    )
  }
  return null
}

const StatisticLine = ({text, metric}) => {
  if (typeof(metric) === 'function'){
    return (
      <>
        <p>{text} : {metric()}</p>
      </>
    )
  }
  return (
    <>
        <p>{text} : {metric}</p>
    </>
  )
}

export default App