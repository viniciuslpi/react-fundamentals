import { useParams } from 'react-router-dom'

const Product = () => {

    const { id } = useParams()

    return (
        <div>ID do produto: {id}</div>
    )
}

export default Product