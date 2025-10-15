
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RecipeContext } from "../context/DataContext"

const Cart = () => {
    const { cart } = useContext(RecipeContext);
    const navigate = useNavigate();

    // Group cart items
    const getGroupedCart = (cart) => {
        const grouped = [];

        cart.forEach((item) => {
            const existing = grouped.find(
                (i) =>
                    i.productName === item.productName &&
                    i.productPrice === item.productPrice &&
                    i.productSrc === item.productSrc
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                grouped.push({ ...item, quantity: 1 });
            }
        });

        return grouped;
    };

    const groupedCart = getGroupedCart(cart);

    console.log(cart)

    const subtotal = groupedCart.reduce((acc, item) => acc + (Number(item.productPrice) * item.quantity), 0);
    const shipping = 50;
    const total = subtotal + shipping;

    return (
        <div className='py-20 px-5 md:px-[7%] '>
            <h1 className="text-xl font-['GilroyRegular'] flex items-center ">
                <FontAwesomeIcon
                    onClick={() => navigate(-1)}
                    className="cursor-pointer"
                    icon={faAngleLeft} />
                <span className="ml-[35%] lg:ml-[45%]">Cart</span>
            </h1>

            <div id="purchaseCart" className="lg:w-[50%] xl:w-[30%] lg:place-self-center">
                {
                    groupedCart.length === 0 ? (
                        <p className="text-center text-gray-400 mt-10">Your cart is empty.</p>
                    ) : (
                        groupedCart.map((item, index) => (
                            <div key={index} className="flex justify-between py-5 border-b border-gray-200">
                                <div className="flex gap-3">
                                    <img src={item.productSrc} alt={item.productName} className="h-12 w-12 rounded object-cover" />
                                    <div>
                                        <h1 className="font-medium">{item.productName}</h1>
                                        <small className="text-red-300">₹{item.productPrice}</small>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-lg">
                                    Qty: {item.quantity}
                                </div>
                            </div>
                        ))
                    )
                }

                {groupedCart.length > 0 && (
                    <>
                        <div className="text-zinc-400 mt-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹{shipping.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between text-white font-semibold">
                                <span>Total</span>
                                <span className="text-red-300">₹{total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/checkout')}
                            className="bg-red-400 rounded-lg w-full py-2 active:scale-[0.95] transition my-4 text-white">
                            Proceed to Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};


export default Cart
