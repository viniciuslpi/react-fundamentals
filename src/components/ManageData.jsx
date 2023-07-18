import { useState } from "react" 

const ManageData = () => {
    
    const [number, setNumber] = useState(10)
  
    const sum = () => {
        setNumber(number + 1)
    }

    return (
    <div>
        <div>{ number }</div>
        <button onClick={sum}>Clique para somar</button>
    </div>
  )
}

export default ManageData