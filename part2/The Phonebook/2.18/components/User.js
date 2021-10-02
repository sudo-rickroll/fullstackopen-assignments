import React from 'react'

const User = ({user, handleDelete}) => <tr><td>{user.name}</td><td>{user.number}</td><td><button onClick={() =>  handleDelete(user.id)}>Delete</button></td></tr>

export default User