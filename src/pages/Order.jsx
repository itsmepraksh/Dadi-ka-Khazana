import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"



const Order = () => {

    const navigate = useNavigate()
    return (
        <div className="py-20 px-5">
            <h1 className=" text-xl font-['GilroyRegular'] flex items-center ">
                <FontAwesomeIcon
                    onClick={() => navigate(-1)}
                    className=" text-regular"
                    icon={faAngleLeft} />

                <span className="ml-[15%]">Ordered Confirmed</span>
            </h1>

            <div id="order-summary">
                <div id="confirm" className="p-6 bg-red-400/30 rounded-full w-fit place-self-center my-10">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-3xl text-red-400" />
                </div>
                <div id="order-desc" className="text-center">
                    <h1 className="font-['GilroyMedium'] text-2xl">Thank you for your order!</h1>
                    <p className="text-zinc-500 text-sm">Your order #{Math.floor(100000 + Math.random() * 900000)} has been confirmed.</p>
                </div>
                <div className="w-full py-10" >
                        <h1>Order Summary</h1>
                        <div id="order-summary" className="bg-zinc-700 rounded-lg p-4 my-2">
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Subtotal</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Shipping</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Tax</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-white py-1"><span>Total</span> <span className="text-white">$99.00</span></div>

                        </div>
                        <button
                            onClick={() => navigate('/product')}
                            className="bg-red-400 rounded-lg w-full py-2 active:scale-[0.95] transition my-4">
                            Continue Shopping
                        </button>
                    </div>

            </div>
        </div>
    )
}

export default Order