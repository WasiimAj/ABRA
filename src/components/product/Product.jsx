import "./Product.css";
import product from "../../Images/product-1.jpg";
import logo from "../../Images/ABRA-logo-light (1).png";
import shop from "../../Images/shoping-icon.png";
import back from "../../Images/back.png";
import added from "../../Images/added.png";
import check from "../../Images/check.png";


const ProductAdded = () => {
    var added = document.getElementById('added');        
    setTimeout(() => {
        added.classList.add('show');
    }, "500")
    
    setTimeout(() => {
        added.classList.remove('show');
    }, "2500")
}


var tabs = document.querySelectorAll(".tabs li");
var tabsArray = Array.from(tabs);
var divs = document.querySelectorAll(".content > div");
var divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
        ele.classList.remove("active");
    })
        e.currentTarget.classList.add("active")
        divsArray.forEach((div) => {
        div.style.display = "none";
    })
    var current = document.querySelector(e.currentTarget.dataset.cont)
    current.style.display = "block"
    })
})




const Product = () => {
    return (
        <>
            <header className="product-header">
                <a href="/">
                <img
                    className="go-back"
                    src={back}
                    alt="go-back-icon"
                />
                </a>
                <a href="/">
                <img 
                    className="logo"
                    src={logo} 
                    alt="logo-icon" 
                />
                </a>
                <a href="/cart">
                <img 
                    className="shoping-cart-icon"
                    src={shop} 
                    alt="shop-icon" 
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

                
            <ul className="tabs">
                <li className="active" data-cont=".one">Proudect</li>
                <li data-cont=".two">Details</li>
                <li data-cont=".three">Reviews</li>
            </ul>

            <div className="content">

                <div className="one">

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

                <div className="two">
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
                <div className="three">
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
                </div>

            </div>


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
        </>
    )
}

export default Product;