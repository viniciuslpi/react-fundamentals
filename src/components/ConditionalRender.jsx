import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)

  return (
    <div>
        <h1>Isso será exibido?</h1>
        { x && <p>Se x for true, então sim!</p> }
    </div>
  )
}

export default ConditionalRender