import "./Checkout.css";
import { useState } from "react";

import visa from "../../Images/visa.png";
import mada from "../../Images/mada.jpg";


const Checkout = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="checkout-page-box">

      <div className="steps-box">
          <div className="step">
            <button
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? "active-step " : ""}
            > 1 </button>
            <p>Personal Info</p>
          </div>
          <div className="step">
            <button
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? "active-step " : ""}
            > 2 </button>
            <p>Shipping Info</p>
          </div>
          <div className="step">
            <button
              onClick={() => toggleTab(3)}
              className={toggleState === 3 ? "active-step " : ""}
            > 3 </button>
            <p>Payment</p>
          </div>
      </div>

      <hr className="dividingLine"/>

      <div className="content-tabs">

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 className="content-title">Personal Info</h2>
          <span className="fill-info-span">fill your info</span>

          <form action="">
            <input className="input-form" type="text" placeholder="Full Name"/>
            <input className="input-form" type="text" placeholder="Phone Number" />
            <input className="input-form" type="text" placeholder="Address" />
            <input className="input-form" type="text" placeholder="City" />
          </form>
          <button
            className="continue-btn"
            onClick={() => toggleTab(2)}  
          > Continue </button>
        </div>





        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2 className="content-title" >Shipping Address</h2>

          <input className="input-form" type="text" placeholder="Address" />
          <input className="input-form" type="text" placeholder="City" />

          <button
            className="continue-btn"
            onClick={() => toggleTab(3)}  
          > Continue </button>
        </div>





        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <input className="input-form" type="text" placeholder="Discount code" />
        <h2 className="content-title" > Payment Method </h2>

        <div className="payment-method">
          <div>
            <input className="radio-input" type="radio" name='payment-method' id="method2"/>
            <label htmlFor="method2">
              <img className="payment-method-img" src={mada} alt="payment-method-2" />
            </label>
          </div>
          <div>
            <input className="radio-input" type="radio" name='payment-method' id="method1"/>
            <label htmlFor="method1">
              <img className="payment-method-img-visa" src={visa} alt="payment-method-1" />
            </label>
          </div>
        </div>

          <a href="/checkout-done"
            className="continue-btn"
          > Checkout </a>
        </div>
      </div>



      </div>
    </>
  )
}

export default Checkout;