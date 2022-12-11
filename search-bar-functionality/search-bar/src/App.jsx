import { useState } from 'react'
import './App.css'
import { Users } from "./users";

function App() {

  const [query, setQuery] = useState("");
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="app">
      <input type="text" placeholder='search...' className="search" onInput={handleQuery} />
      <ul className="list">
        {
          Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
            <li key={user.id} className="listItem">{user.first_name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
