import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
    const navigate = useNavigate()
    return (
        <div className="py-20 px-5">
            <h1 className=" text-xl font-['GilroyRegular'] flex items-center ">
                <FontAwesomeIcon
                    onClick={() => navigate(-1)}
                    className=" text-regular"
                    icon={faAngleLeft} />

                <span className="ml-[30%]">Checkout</span>
            </h1>

            <div className="py-4">
                <h1>Shipping Address</h1>
                <form action="" className="py-2 flex flex-wrap gap-4 justify-between">
                    <div className="w-full">
                        <label htmlFor="address" className="block text-sm text-zinc-400 py-1">Address </label>
                        <input id="addresss" type="text" placeholder="123 Abc apt, ..." className="bg-zinc-700 placeholder:font-thin p-2 w-full rounded-lg px-4" />
                    </div>
                    <div className="w-[47%] ">
                        <label htmlFor="city" className="block text-sm text-zinc-400 py-1">City </label>
                        <input id="city" type="text" placeholder="Any City" className="bg-zinc-700 placeholder:font-thin p-2 w-full rounded-lg px-4" />
                    </div>

                    <div className="w-[47%]  ">
                        <label htmlFor="zip-code" className="block text-sm text-zinc-400 py-1">Address </label>
                        <input id="zip-code" type="text" placeholder="123456" className="bg-zinc-700 placeholder:font-thin p-2 w-full rounded-lg px-4" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="payment" className="block text-sm text-zinc-400 py-1">Payment </label>
                        <input id="payment" type="text" placeholder="abc@upi" className="bg-zinc-700 placeholder:font-thin p-2 w-full rounded-lg px-4" />
                    </div>

                    <div className="w-full">
                        <h1>Order Summary</h1>
                        <div id="order-summary" className="bg-zinc-700 rounded-lg p-4 my-2">
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Subtotal</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Shipping</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-zinc-400 text-sm"><span>Tax</span> <span className="text-white">$99.00</span></div>
                            <div className="flex justify-between text-white py-1"><span>Total</span> <span className="text-white">$99.00</span></div>

                        </div>
                        <button
                            // onClick={() => navigate('/checkout')}
                            className="bg-red-400 rounded-lg w-full py-2 active:scale-[0.95] transition my-4">
                            Place Order
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Checkout