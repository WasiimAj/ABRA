import './MyOrders.css';
import back from "../../Images/back.png";
import product from "../../Images/product-1.jpg";

const MyOrders = () => {
    return (
        <>
            <div className="oreder-page-box">
                <header>
                    <a href="/">
                        <img src={back} alt="go-back-img" />
                    </a>
                    <p>My Orders</p>
                </header>
                <main className='all-orders'>
                    <div className='order-box'>
                        <div className="order-img">
                            <img src={product} alt="product-img" />
                        </div>
                        <div className="order-name">
                            <h3 
                                onClick={() => {
                                    document.getElementById('order-popup').style.display = 'block';
                                }}
                            >Vendor Shop Name</h3>
                            <p>2,300 SAR</p>
                        </div>
                        <div className="order-details">
                            <p>Order Number</p>
                            <span>12345678</span>
                            <p>Date</p>
                            <span>01/01/2023</span>
                        </div>
                    </div>
                </main>

                {/* Order Details PopUp Page */}

                <section id='order-popup' className='order-details-box-popup'>
                    <header>
                        <img 
                            onClick={() => {
                                document.getElementById('order-popup').style.display = 'none';
                            }}
                            src={back} 
                            alt="go-back-img" 
                        />
                    </header>

                    <div className="order-shop-info">
                        <div className="order-img">
                            <img src={product} alt="product-img" />
                        </div>
                        <div className="shop-name">
                            <h3>Vendoe Shop Name</h3>
                            <div className='order-number'>
                                <p>Order Number</p>
                                <span> 12345678</span>
                            </div>
                            <div className='order-number'>
                                <p>Date</p>
                                <span>01/01/2023</span>
                            </div>
                        </div>
                        <div className="oreder-price">
                                <p>2,300 SAR</p>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className="delivery-address">
                        <p>Delivery Address</p>
                        <span>Jeddah</span>
                        <span>Street 20</span>
                        <span>House 10</span>
                    </div>

                    <div className='line'></div>

                    <div className="delivery-oreder-details">
                        <p>Order Details</p>
                        <div>
                            <span>Itam 1  <sup>&#x2715;2</sup></span>
                            <p>1,000 SAR</p>
                        </div>
                        <div>
                            <span>Itam 2  <sup>&#x2715;1</sup></span>
                            <p>300 SAR</p>
                        </div>
                        <div>
                            <span>Itam 3  <sup>&#x2715;4</sup></span>
                            <p>2,000 SAR</p>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default MyOrders;