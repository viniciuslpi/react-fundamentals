import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'
import './Home.css'

import ChangeCounter from '../components/ChangeCounter'
const Home = () => {

  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContext()
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)
  console.log(color)

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <div>
        <button onClick={() => setTitleColor('RED')}>Red</button>
        <button onClick={() => setTitleColor('BLUE')}>Blue</button>
      </div>
      <p>Valor do contador {counter}</p>
      <ChangeCounter />
      {/* <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Home