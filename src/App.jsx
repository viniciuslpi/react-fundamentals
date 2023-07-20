import './App.css'

import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import { useState, useEffect } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import { useFetch } from './hooks/useFetch'
const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const { data: items, httpConfig } = useFetch(url)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <ul>
        {items && items.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={e => setPrice(e.target.value)} />
          </label>
          <input type="submit" value='Criar produto' />
        </form>
      </div>

    </div>
  )
}

export default App
