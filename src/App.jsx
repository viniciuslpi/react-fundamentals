import './App.css'

import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import { useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'



function App() {

  const [colorAttribute, setColorAttribute] = useState(true)

  const changeColor = () => {
    setColorAttribute(!colorAttribute)
  }

  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      {/* <h2 className={colorAttribute ? 'red-title' : 'title' }>Este título vai ter classe dinâmica</h2>
      <button onClick={changeColor}>Change Color!</button> */}
      <Form user={{ name: 'Josias', email: 'josias@gmail.com' }}/>
    </div>
  )
}

export default App
