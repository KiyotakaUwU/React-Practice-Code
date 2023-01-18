import React from 'react'

function State({person}) {
  return (
    <div>
        <p>Name: {person.name}</p>
        <p>Last Name: {person.lastName}</p>
        <p>Email: {person.email}</p>
        <p>State: {person.state ? "Contact online" : "Contact not available"}</p>
    </div>
  )
}

export default State