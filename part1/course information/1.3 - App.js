import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {    
    name : 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }

  return (
    <div>
      <Header model = {course} />
      <Content model = {{part1:part1, part2:part2, part3:part3}} />
      <Total model = {{part1:part1, part2:part2, part3:part3}} />      
    </div>
  )
}

const Header = (props) => {
  const {course} = props

  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = (props) => {
  const {part1, part2, part3} = props.model

  return(
    <>
      <Part name = {part1.name} exercises={part1.exercises} />
      <Part name = {part2.name} exercises={part2.exercises} />
      <Part name = {part3.name} exercises={part3.exercises} />
      
    </>
  )
}

const Total = (props) => {
  const {part1, part2, part3} = props.model

  return(
    <>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
}

const Part = (props) => {

  return(
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

export default App