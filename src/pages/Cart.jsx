import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"


const Cart = () => {

    const navigate = useNavigate()
    return (
        <div className='py-20 px-5'>
            <h1 className=" text-xl font-['GilroyRegular'] flex items-center ">
                <FontAwesomeIcon
                    onClick={() => navigate(-1)}
                    className=" text-regular"
                    icon={faAngleLeft} />
                
                <span className="ml-[35%]">Cart</span>
            </h1>
            <div id="purchaseCart">
                <div id="cartItm" className="flex justify-between py-5">
                    <div className="flex gap-3">
                        <div id="cartBox" className="bg-white rounded h-12 w-12"></div>
                        <div id="cartData">
                            <h1>Avocado Toast</h1>
                            <small className="text-red-300">₹999.50</small>
                        </div>

                    </div>
                    <div id="cartQuantity">
                        - 1 +
                    </div>
                </div>
                <div id="bill" className="text-zinc-400">
                    <h1><span>Subtotal</span>
                    </h1>
                    <h1>Shipping</h1>
                    <hr className="my-2" />
                    <div className="flex justify-between text-white"><span>Total</span> <span className="text-red-300">$99.00</span></div>
                </div>
                <button
                    onClick={() => navigate('/checkout')}
                    className="bg-red-400 rounded-lg w-full py-2 active:scale-[0.95] transition my-4">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart