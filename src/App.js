import React, { useState } from 'react'

/* Desafio 2 - Exercício 4 */
function App () {
  const contactArray = [
    { name: 'Diego' },
    { name: 'Gabriel' },
    { name: 'Lucas' }
  ]

  const [contacts, setContacts] = useState(contactArray)
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h2>Add Someone</h2>
      <div>
        <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={() => setContacts([...contacts, { name: inputValue }])}>Submit</button>
      </div>

      <h2>Existing contacts:</h2>
      <ul>
        {contacts.map((contact) =>
          <li>{`Name: ${contact.name}`}</li>
        )}
      </ul>
    </div>
  )
}

export default App
