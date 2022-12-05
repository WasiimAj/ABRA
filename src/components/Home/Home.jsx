import './home.css';
import menue from "../../Images/menue.png";
import logo from "../../Images/ABRA-logo-light (1).png";
import search from "../../Images/search.png";
import shop from "../../Images/shoping-icon.png";
// Category Images
import t_shirt from "../../Images/t-shirt.png";
import shose from "../../Images/shose.png"; 
import face from "../../Images/face.png";
import home from "../../Images/home.png"; 
import furnter from "../../Images/furnter.png"; 

// Menuebar Images
import myOrders from "../../Images/pakage.png";
import address from "../../Images/address.png";
import sequrity from "../../Images/sequrity.png";
import switchbtn from "../../Images/switch.png";
import logout from "../../Images/logout.png";

// Products Images
import product1 from "../../Images/product-1.jpg";

// Cart Images
import deleteIcon from "../../Images/delete.png";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://s3-alpha-sig.figma.com/img/f838/9209/2e47cad9ad7f373ed63b4e7177635de1?Expires=1670803200&Signature=Wt1E0soOLQ5z2HXr5hXZn~mJV7Rw3vyeJXw8~S-8fPRYXgKnWAQ3zhCDMUDxj7d0lQfq0qWpJvJR8fogipJH4xawTgpPt8IHNQ12SDTslUx8wOFw2qLIEES36srLTDZOxPatPkHhJFWxGIvcv~KofWNIADPj0m7GaoRHIpoQ9G280HXDavk~oZxrYfSt9WwF4Av9sR-luXkOkeh08b79ju2MqhNMQCKo4MG9Mdr0SpJaYNluh6i8GgArP1~3dpm6GXjPu7E0vlWelZclW46BmQ5u~-m-emR1CX4ocCPyf~xry8UWLRA9ZTSw2jxZc-Bak4ZHmQLdyDgWtwu1VfxsLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" },
    // { url: "images/2.jpg" },
    // { url: "images/3.jpg" },
    // { url: "images/4.jpg" },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
];

// Show & Hide Function Start Here => Search Input ..

const ShowSearch = () => {
    var search = document.getElementById('search-popup');
    var searchBox = document.getElementById('search-box');
    search.style.display = "block";
    searchBox.style.display = "block";
    document.body.style.overflow = "hidden"
};

const HideSearch = () => {
    var search = document.getElementById('search-popup');
    var searchBox = document.getElementById('search-box');
    search.style.display = "none";
    searchBox.style.display = "none";
    document.body.style.overflow = "auto"
};

// Show & Hide Function End Here => Search Input ..



// Show & Hide Function Start Here => Menue Sidiebar  ..

const ShowMenue = () => {
    var mainmenue = document.getElementById('menue');
    var sideMenue = document.getElementById('side-menue');
    mainmenue.classList.add('hide');
    sideMenue.classList.add('hide');
    document.body.style.overflow = "hidden"
}

const HideMenue = () => {
    var mainmenue = document.getElementById('menue');
    var sideMenue = document.getElementById('side-menue');
    mainmenue.classList.remove('hide');
    sideMenue.classList.remove('hide');
    document.body.style.overflow = "auto";
}

// Show & Hide Function Start Here => Menue Sidiebar  ..

// Show & Hide Function Start Here => Menue Sidiebar  ..

const ShowCart = () => {
    var cart = document.getElementById('cart');
    cart.classList.add('show-cart');
    document.body.style.overflow = "hidden";
}

const HideCart = () => {
    var cart = document.getElementById('cart');
    cart.classList.remove('show-cart');
    document.body.style.overflow = "auto";
}


// Show & Hide Function Start Here => Menue Sidiebar  ..




const Home = () => {
    return (
        <>

        
        <div className="cart" id='cart'>
            <div
                onClick={HideCart}
                className="close-btn">
                ✖
            </div>
            <div className="cart-info">
                <img className='cart-product-image'
                    src={product1} 
                    alt="product1-image1"  
                />
                <div className='cart-product-info'>
                    <h3 className='cart-product-name'>Woman Ring</h3>
                    <p className='cart-product-price'>100 SAR</p>
                </div>
                <div className="quantity">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <img  className='delete-icon'
                    src={deleteIcon} 
                    alt='delete-product-cart' 
                />
            </div>

            <div className="cart-info">
                <img className='cart-product-image'
                    src={product1} 
                    alt="product1-image1"  
                />
                <div className='cart-product-info'>
                    <h3 className='cart-product-name'>Woman Ring</h3>
                    <p className='cart-product-price'>100 SAR</p>
                </div>
                <div className="quantity">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
                <img  className='delete-icon'
                    src={deleteIcon} 
                    alt='delete-product-cart' 
                />
            </div>

            <div className="total">
                <div className='total-price'>
                    <p>Total:</p>
                    <span>200 SAR</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
        
        {/* Cart PopUP Section End Here .. */}

        {/* Search PopUP Section Start .. */}

            <div  className="search-popup" id='search-popup'>
                <form action="">
                    <input className='search-input' type="text" name="search" />
                    <input className='submit-search-input' type="submit" value="Search" />
                </form>
            </div>
            <div onClick={HideSearch} className='search-box' id='search-box'></div>

        {/* Search PopUP Section End Here .. */}

        {/* Menue PopUP Section Start Here */}

        <div className='menue' id='menue'>
            <div className="main-menue">
                <div className="user">
                    <div className="user-img">MA</div>
                    <h3 className='user-name'>Mohammad alabdullah</h3>
                    <p className='user-email'>capivokw@gmail.com</p>
                </div>

                <hr />

                <nav className='user-setting'>
                    <div className='navigation'>
                        <img
                            className='menue-icons'
                            src={myOrders} 
                            alt="icon-1" 
                        />
                        <a className='menue-icons-name' href="#1">My Orders</a>
                    </div>
                    <div className='navigation'>
                        <img
                            className='menue-icons'
                            src={address} 
                            alt="icon-1" 
                        />
                        <a className='menue-icons-name' href="#1">My Addresses</a>
                    </div>
                    <div className='navigation'>
                        <img
                            className='menue-icons'
                            src={sequrity} 
                            alt="icon-1" 
                        />
                        <a className='menue-icons-name' href="#1">Privacy and Policy</a>
                    </div>
                    <div className='language'>
                        <p className='lang-name'>English</p>
                        <img className='switch' 
                            src={switchbtn} 
                            alt="switch" 
                        />
                        <p className='lang-name'>العربية</p>
                    </div>
                    
                    <div className='logout'>
                        <p>Logout</p>
                        <img src={logout} alt="logout"  />
                    </div>
                </nav>

            </div>
            <div 
                className='side-menue' 
                id='side-menue'
                onClick={HideMenue}
            >
            </div>
        </div>

        {/* Menue PopUP Section End Here */}

        {/* Header Section Start Here .. */}

            <header className='Home-page-header'>
                <img 
                    onClick={ShowMenue}
                    className='menue-icon' 
                    src={menue} 
                    alt="menue-icon"  
                />

                <img className='home-page-logo' src={logo} alt="menue-icon"  />

                <div className='user-div1'>
                    <img 
                        onClick={ShowSearch}
                        className='search-icon' 
                        src={search} 
                        alt="menue-icon"  
                    />
                    <img 
                        onClick={ShowCart}
                        className='shop-icon' 
                        src={shop} 
                        alt="menue-icon"  
                    />
                </div>
            </header>

            {/*  Header Section End Here ..  */}

            {/* Image Slider Section Start Here .. */}

            <div className="imge-slider">
                <SimpleImageSlider 
                    width={429}
                    height={225}
                    images={images}
                    showBullets={false}
                    showNavs={true}
                    navSize={30}
                    navMargin={5}
                />
            </div>

            {/* Image Slider Section End Here .. */}


            {/* Category Section Start Here .. */}

            <section className='category-section'>

                <div className='category-all'>
                    <div className='category-type'>
                        <img className='category-image' src={t_shirt} alt="t-shirt _picture" />
                    </div>
                    <div className='category-type-name'>
                        <h3 className='category-name'>Apparel</h3>
                    </div>                    
                </div>

                <div className='category-all'>
                    <div className='category-type'>
                        <img className='category-image' src={shose} alt="t-shirt _picture" />
                    </div>
                    <div className='category-type-name'>
                        <h3 className='category-name'>Shoses</h3>
                    </div>                    
                </div>

                <div className='category-all'>
                    <div className='category-type active-category'>
                        <img className='category-image' src={face} alt="t-shirt _picture" />
                    </div>
                    <div className='category-type-name'>
                        <h3 className='category-name'>Face</h3>
                    </div>                    
                </div>

                <div className='category-all'>
                    <div className='category-type'>
                        <img className='category-image' src={home} alt="t-shirt _picture" />
                    </div>
                    <div className='category-type-name'>
                        <h3 className='category-name'>Home</h3>
                    </div>                    
                </div>

                <div className='category-all'>
                    <div className='category-type'>
                        <img className='category-image' src={furnter} alt="t-shirt _picture" />
                    </div>
                    <div className='category-type-name'>
                        <h3 className='category-name'>Furniture</h3>
                    </div>                    
                </div>
            
            </section>

            {/* Category Section End Here .. */}

            {/* Products Section Start Here ..*/}

            <h1 className='product-title'>New Proudacts</h1>

            <div className="product-section">
                <div className="product">
                    <img className='product-image' src={product1} alt="product-img" />
                    <a href="/product_id" className='product-name'>
                        Woman Ring
                    </a>
                    <p className='product-description'>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem 
                    </p>
                    <p className='product-price'>
                        100 SAR
                    </p>
                    <button className='add-product-btn'>Add to cart</button>
                </div>

                <div className="product">
                    <img className='product-image' src={product1} alt="product-img" />
                    <a href="/product_id" className='product-name'>
                        Woman Ring
                    </a>
                    <p className='product-description'>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem 
                    </p>
                    <p className='product-price'>
                        100 SAR
                    </p>
                    <button className='add-product-btn'>Add to cart</button>
                </div>
                <div className="product">
                    <img className='product-image' src={product1} alt="product-img" />
                    <a href="/product_id" className='product-name'>
                        Woman Ring
                    </a>
                    <p className='product-description'>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem 
                    </p>
                    <p className='product-price'>
                        100 SAR
                    </p>
                    <button className='add-product-btn'>Add to cart</button>
                </div>
                <div className="product">
                    <img className='product-image' src={product1} alt="product-img" />
                    <a href="/product_id" className='product-name'>
                        Woman Ring
                    </a>
                    <p className='product-description'>
                        Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem 
                    </p>
                    <p className='product-price'>
                        100 SAR
                    </p>
                    <button className='add-product-btn'>Add to cart</button>
                </div>

            </div>

            {/* Products Section End Here ..*/}

        </>
    )
}

export default Home;