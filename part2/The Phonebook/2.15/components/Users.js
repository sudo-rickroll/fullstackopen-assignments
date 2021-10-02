import React from 'react'
import User from './User'

const Users = ({users}) => <table><tbody>{users.map((user) => <User key={user.id} user={user}/>)}</tbody></table>

export default Users