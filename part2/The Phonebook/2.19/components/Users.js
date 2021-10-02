import React from 'react'
import User from './User'

const Users = ({users, onDelete}) => <table><tbody>{users.map((user) => <User key={user.id} user={user}  handleDelete={onDelete}/>)}</tbody></table>

export default Users