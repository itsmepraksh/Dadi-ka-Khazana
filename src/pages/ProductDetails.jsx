import { useNavigate, useParams } from "react-router-dom"

 

const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams() 
  return (
    <div>
        <h1>{params.name}</h1>
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default ProductDetails