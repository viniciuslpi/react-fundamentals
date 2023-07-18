import { useState } from "react"

const ListRender = () => {
    const [list] = useState([
        'Matheus', 'Pedro', 'Leonardo', 'Maria', 
    ])

    const [user, setUser] = useState([
        { id: 1, name: 'Matheus'}, 
        { id: 2, name: 'Pedro'}, 
        { id: 3, name: 'Leonardo'}, 
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUser((prevUsers) => {
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {user.map((user, index) => (
                <li key={index}>{ user.name }</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender