// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  const handleSubmit = event => {
    event.preventDefault()
    const username = event.target.elements.nameInput.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      :)
      <div>
        <label htmlFor="nameInput">Username:</label>
        <input type="text" id="nameInput" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function RefForm({props}) {
  const [error, setError] = React.useState(null)
  const formRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const username = formRef.current.value
    alert(username)
  }

  const handleChange = event => {
    const username = formRef.current.value
    if (username !== username.toLowerCase()) {
      setError('You must enter only lower case letters')
    } else {
      setError(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          id="refInput"
          ref={formRef}
          onChange={handleChange}
        />
      </div>
      {error ? <div>{error}</div> : null}
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => {
    alert(`You entered: ${username}`)
  }
  return (
    <>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
      <RefForm />
    </>
  )
}

export default App
