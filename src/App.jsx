import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetch } from './hooks/useFetch'
import { useState } from 'react'

import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import Title from './components/Title'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'


const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const { data: items, httpConfig, loading, error } = useFetch(url)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { name, price }

    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/products/:id' element={<Product />}></Route>
          <Route exact path='*' element={<Product />}></Route>

        </Routes>
      </BrowserRouter>





      {/* {loading && <p>Carregando dados...</p>}
      { error && <p>{error}</p>}
      {!loading &&
        <ul>
          {items && items.map(product => (
            <li key={product.id}>{product.name} - {product.price}</li>
          ))}
        </ul>}
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
      </div> */}
    </div>
  )
}

export default App
