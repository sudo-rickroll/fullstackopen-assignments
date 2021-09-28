import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

const Courses = ({courses}) => courses.map((module) => <Module key={module.id} module={module} />)

const Module = ({module}) => {
  const totalCourses = () => module.parts.reduce((total, item) => total + item.exercises, 0)
  module['total'] = totalCourses()
  const {name, parts, total} = module
  return (
    <>
      <Header text={name} />
      <Content body={parts} />
      <Footer count={total} />
    </>
  )
}

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Content = ({body}) => {
  return (body.map(
    item => <Part key={item.id} name={item.name} exercises={item.exercises} />    
  ))
}

const Footer = ({count}) => {
  return (
    <b>total of {count} exercises</b>  
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

export default App