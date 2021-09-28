import React from 'react'
import User from './User'

const Users = ({users}) => users.map((user, index) => <User key={index} user={user}/>)

export default Users