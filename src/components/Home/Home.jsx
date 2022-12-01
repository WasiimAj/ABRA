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

// Products Images
import product1 from "../../Images/product-1.jpg";

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

const Search = () => {
    var search = document.getElementById('searchPopup');
    search.style.display ="block";
}



const Home = () => {
    return (
        <>
            
            <div className="search-popup" id='searchPopup'>
                <form action="">
                    <input className='search-input' type="text" name="search" />
                    <input className='submit-search-input' type="submit" value="Search" />
                </form>
            </div>

            <header className='Home-header'>
                <img className='menue-icon' src={menue} alt="menue-icon"  />
                <img className='website-logo' src={logo} alt="menue-icon"  />

                <div className='user-div'>
                    <img 
                        onClick={Search}
                        className='search-icon' 
                        src={search} 
                        alt="menue-icon"  
                    />
                    <img className='shop-icon' src={shop} alt="menue-icon"  />
                </div>
            </header>

            {/* Image Slider */}
            <div className="imge-slider">
                <SimpleImageSlider 
                    width={429}
                    height={225}
                    images={images}
                    showBullets={false}
                    showNavs={true}
                />
            </div>

            {/* Category Section */}
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
                    <div className='category-type active'>
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

            {/* Products Section */}

            <h1 className='product-title'>New Proudacts</h1>

            <div className="product-section">
                <div className="product">
                    <img className='product-image' src={product1} alt="product-img" />
                    <h3 className='product-name'>
                        Woman Ring
                    </h3>
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
                    <h3 className='product-name'>
                        Woman Ring
                    </h3>
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
                    <h3 className='product-name'>
                        Woman Ring
                    </h3>
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
                    <h3 className='product-name'>
                        Woman Ring
                    </h3>
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

        </>
    )
}

export default Home