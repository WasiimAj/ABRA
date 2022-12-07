import "./Product.css";
import product from "../../Images/product-1.jpg";
import back from "../../Images/back.png";
import added from "../../Images/added.png";
import check from "../../Images/check.png";

import { useState } from "react";

const ProductAdded = () => {
    var added = document.getElementById('added');        
    setTimeout(() => {
        added.classList.add('show-success-message');
        document.body.style.overflow = "hidden";
    }, "500")
    
    setTimeout(() => {
        added.classList.remove('show-success-message');
        document.body.style.overflow = "auto";
    }, "2500")
}


const Product = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="product-page-div">
            <header className="product-header">
                <a href="/">
                <img
                    className="go-back"
                    src={back}
                    alt="go-back-icon"
                />
                </a>
            </header>

            <div className="product-div">
                    <img
                        className="product-img"
                        src={product} 
                        alt="product-img"
                    />
                    <div className="product-info">
                        <h3>Woman Ring</h3>
                        <span>100 SAR</span>
                    </div>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem
                    </p>


                {/* Start Edit */}

        <div className="titles-bar">
            <button
                className={toggleState === 1 ? "slide-title active-slide-title" : "slide-title "}
                onClick={() => toggleTab(1)}
            > Proudect
            </button>
            <button
                className={toggleState === 2 ? "slide-title active-slide-title" : "slide-title "}
                onClick={() => toggleTab(2)}
            > Details
            </button>
            <button
                className={toggleState === 3 ? "slide-title active-slide-title" : "slide-title "}
                onClick={() => toggleTab(3)}
            > Reviews
            </button>
        </div>

        <div className="content-tabs">
            <div
                className={toggleState === 1 ? "content  active-content" : "content"}
            >
                
                <div className="select-color">
                    <p>Select Color:</p>
                    <div className="product-colors">
                        <div className="color color1">
                            <img className="check" src={check} alt="" />
                        </div>
                        <div className="color color2">
                            <img className="check" src={check} alt="" />
                        </div>
                        <div className="color color3">
                            <img className="check" src={check} alt="" />
                        </div>  
                    </div>
                    </div>
                    <div className="select-size">
                    <p>Select Size:</p>
                    <select name="size" className="select">
                        <option value="x-large">XL</option>
                        <option value="large">L</option>
                        <option value="medium">M</option>
                        <option value="small">S</option>
                    </select>
                </div>


            </div>

            <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            >
                    <div className="details">
                        <div className="brand">
                            <p>Brand</p>
                            <p>SKU</p>
                        </div>
                        <div className="brand-name">
                            <p>van cleef</p>
                            <p>1358458945</p>
                        </div>
                        <br/>
                        <div className="brand">
                        <p>Conditions</p>
                        <p>Materials</p>
                        </div>
                        <div className="brand-name">
                            <p>Brand new</p>
                            <p>Dimond</p>
                        </div>
                    </div>
            </div>

            <div
                className={toggleState === 3 ? "content  active-content" : "content"}
            >
                <div className="reviews">
                    <div className="user-review-time">
                    <div className="user-photo">MA</div>  
                </div>

                <div className="review">
                    <div className="user-review">
                        <p className='user-name'>Mohammad Alabdullah</p>
                        <p className='review-date'>7 sept</p>
                    </div>
                    <p className='main-review'>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                    </p>
                </div>
            </div>

            <div className="reviews">
                <div className="user-review-time">
                    <div className="user-photo">MA</div>                    
                </div>

                <div className="review">
                    <div className="user-review">
                        <p className='user-name'>Mohammad Alabdullah</p>
                        <p className='review-date'>23 sept</p>
                    </div>
                    <p className='main-review'>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                    </p>
                </div>
            </div>

            <div className="reviews">
                <div className="user-review-time">
                    <div className="user-photo">MA</div>                    
                </div>

                <div className="review">
                    <div className="user-review">
                        <p className='user-name'>Mohammad Alabdullah</p>
                        <p className='review-date'>7 sept</p>
                    </div>
                    <p className='main-review'>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                    </p>
                </div>
            </div>

            <div className="reviews">
                <div className="user-review-time">
                    <div className="user-photo">MA</div>                    
                </div>

                <div className="review">
                    <div className="user-review">
                        <p className='user-name'>Mohammad Alabdullah</p>
                        <p className='review-date'>7 sept</p>
                    </div>
                    <p className='main-review'>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Lorem Ipsum is simply 
                        dummy text of the printing and typesetting industry. 
                        Lorem Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem
                    </p>
                </div>
            </div>
            </div>
        </div>
                {/* End Edit */}

                    <div className="product-added-overlay" id="added">
                        <div className="product-added">
                            <img className="added" src={added} alt="added product" />
                            <p>Added successfuly</p>
                        </div>
                    </div>

                    <button 
                        onClick={ProductAdded}
                        className="add-to-cart"
                    >
                        Add to cart
                    </button>
            </div>
        </div>
    )
}

export default Product;