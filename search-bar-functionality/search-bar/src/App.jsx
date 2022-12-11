import { useState } from 'react'
import './App.css'
import { Users } from "./users";

function App() {

  const [query, setQuery] = useState("");

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="app">
      <input type="text" placeholder='search' className="search" onChange={handleQuery} />
      <ul className="list">
        {
          Users.map((user) => (
            <li key={user.id} className="listItem">{user.first_name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
