import React from 'react'
import "./Checkout.css";


var btn1 = document.getElementById('bt1n');


var section1 = document.getElementById('personal-info')
var section2 = document.getElementById('personal-info')
var section3 = document.getElementById('personal-info')

if (btn1) {
  btn1.addEventListener('click', () => {
    section1.classList.toggle('sections-hide')
  });

}


const Checkout = () => {
  return (
    <>
      <div className='steps-box'>
          <div className="step">
            <button id='btn1'>1</button>
            <p>Personal Info</p>
          </div>
          <div className="step">
            <button id='btn2'>2</button>
            <p>Shiping Info</p>
          </div>
          <div className="step">
            <button id='btn3'>3</button>
            <p>Payment</p>
          </div>
      </div>

      <div className='info-box'>

        <div id='personal-info' className="personal-info sections-hide">
          
        </div>

        <div className="shipping-address">
          
        </div>

        <div className="payment">
          
        </div>

      </div>
    </>
  )
}

export default Checkout;