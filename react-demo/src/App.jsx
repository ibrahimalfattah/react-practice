
// here we create components for the app
// rafce is a shortcut for react functional component
// every component will return a JSX element 
// it can return a single element or a fragment
// fragment is an empty tag that can contain multiple elements
import React from 'react'

const App = () => {
  const name = 'John Doe'
  const age = 20
  const friends= ['John', 'Jane', 'Jim', 'Jill']
  const isStudent = false

  
  return (
    <div className="text-blue-500">
      <h1>Hello {name}</h1>
      <p>You are {age} years old</p> 
      <p>You have {friends.length} friends</p> 
      <ul>
        {friends.map((friend,index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <p>You are a student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default App