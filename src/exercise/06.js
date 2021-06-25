// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const UsernameInputRef = React.useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const value = UsernameInputRef.current.value
    onSubmitUsername(value);
  }

  const [error, setError] = React.useState(null)
  function handleChange(event) {
    const {value} = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : "Username must be lower case")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
        <label style={{color: 'red'}} role="alert" className="">{error}</label>
        </div>
        
        <label htmlFor="UserNameInput">Username:</label>
        <input onChange={handleChange} ref={UsernameInputRef} id ="UserNameInput" type="text" />
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}


function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
