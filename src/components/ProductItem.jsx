import { useContext } from "react";
import { RecipeContext } from "../context/DataContext";
import { toast } from "react-toastify";



const ProductItem = ({ productSrc, productName, productPrice, isSponsored }) => {

  const { cart, setCart , isLoggedIn } = useContext(RecipeContext)

  const cartHandler = () => {

    // console.log(isLoggedIn)

    const productDets = {
      productName,
      productPrice,
      productSponsored: isSponsored ? isSponsored : false,
      productSrc
    }


    try {

      if(!isLoggedIn) throw new Error('LogIn first!') ;
 
      const copyCart = [...cart]
      copyCart.push(productDets)
      setCart(copyCart)
      
    } catch (err) {
      console.error(err)
      toast.error(err.message)
    }


    // console.log(productDets)





  }
  return (
    <div
      id="product-item"
      className="flex justify-around gap-4 bg-zinc-700 p-4 rounded-xl"
    >
      <img
        className="w-20 aspect-1/1 object-cover object-top rounded"
        src={productSrc}
        alt=""
      />
      <div id="itm-data">
        {isSponsored && (<p className="text-red-400 text-xs">sponsored</p>)}
        <h1 className="py-1">{productName}</h1>
        <p className="text-sm text-zinc-300 pb-2">₹{productPrice}</p>
        <button
          onClick={() => cartHandler()}
          className="bg-red-400 w-40 py-2 rounded-3xl text-xs active:scale-[0.95] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
