import React from 'react'

const App = () => {
  const model = {
    course : 'Half Stack application development',
    part1 : 'Fundamentals of React',
    exercises1 : 10,
    part2 : 'Using props to pass data',
    exercises2 : 7,
    part3 : 'State of a component',
    exercises3 : 14
  }
  return (
    <div>
      <Header model = {model} />
      <Content model = {model} />
      <Total model = {model} />      
    </div>
  )
}

const Header = (props) => {
  const {course} = props.model

  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = (props) => {
  const {part1, part2, part3, exercises1, exercises2, exercises3} = props.model

  return(
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  const {exercises1, exercises2, exercises3} = props.model

  return(
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

export default App