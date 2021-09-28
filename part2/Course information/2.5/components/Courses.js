import React from "react"

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

export default Courses