import React from 'react'

const App = () => {
  const course = {
  name : 'Half Stack application development',
  parts : [{    
    name : 'Fundamentals of React',
    exercises : 10
  },
  {
    name : 'Using props to pass data',
    exercises : 7
  },
  {
    name : 'State of a component',
    exercises : 14
  }]
  }

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />      
    </div>
  )
}

const Header = (props) => {
  const {name} = props.course

  return(
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.course.parts

  return(
    <>
      <Part name = {part1.name} exercises={part1.exercises} />
      <Part name = {part2.name} exercises={part2.exercises} />
      <Part name = {part3.name} exercises={part3.exercises} />
      
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.course.parts

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