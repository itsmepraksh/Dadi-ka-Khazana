import { useNavigate } from "react-router-dom"

 

 

const Product = () => { 
  const navHandler = (e)=>{ 
    navigate(`/product/detail/${e}`)
  }

  const navigate = useNavigate();

  return (
    <div className="flex flex-col"> 
      <h1 onClick={()=>navHandler('product1')}>product1</h1>
      <h1 onClick={()=>navHandler('product2')}>product2</h1>
      <h1 onClick={()=>navHandler('product3')}>product3</h1>
    </div>
  )
}

export default Product