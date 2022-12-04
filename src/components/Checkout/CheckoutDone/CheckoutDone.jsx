import "./checkoutDone.css";
import checkDone from "../../../Images/checkout-check.png";
import next from "../../../Images/next.png";

const CheckoutDone = () => {
    return (
        <>
            <div className='checkout-done-div'>
                    <img className='done-image' src={checkDone} alt="checkout-done-icon" />
                    <div className="checkout-done-text">
                        <h3 className="order-status"> Order Placed! </h3>
                        <p className="message-status">
                            your order has placed successfuly.
                            For more details, check All My Orders page under Profile tab.
                        </p>
                    </div>
                    <div className="my-orders">
                        <p>MY ORDERS</p>
                        <img src={next} alt="next-icon" />
                    </div>
            </div>
        </>
    )
}

export default CheckoutDone