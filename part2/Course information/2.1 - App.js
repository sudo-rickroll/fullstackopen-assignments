import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  const {name, parts} = course
  return (
    <>
      <Header text={name} />
      <Content body={parts} />
    </>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Content = ({body}) => {
  return (body.map(
    item => <Part key={item.id} name={item.name} exercises={item.exercises} />
    
  ))
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

export default App