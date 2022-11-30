import React from 'react'
import "./LandingPage.css";
import logo from "../../Images/logo.jpg";
import menue from "../../Images/menue.png";
import mainImage from "../../Images/main-image.jpg";

const LandingPage = () => {
    return (
        <>
                {/* <img className='logo' src={Logo} alt="website-logo"/>
                <img className='menue' src={menue} alt="website-menue"/>

                <h1 className="main-header"> CREATE YOU OWN STORE NOW! </h1>

                <p className='text'>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy
                </p>

                <button className='btn-create'>
                    Create your store
                </button>

                <img className='main-image' src={mainImage} alt="main-imag-ui" />
                
                <h3 className='package-title'>PACKAGES</h3>

                <div className="package1"></div>                     

                <span className='p1-price'>999 SAR</span>

                <button className='btn1-package'>GET ONE WEEK FREE!</button>

                <div className="package2"></div> 
                
                <span className='p2-price'>1,299 SAR</span>

                <button className='btn2-package'>GET ONE WEEK FREE!</button> */}

                {/* Header [ logo & Menuebar] */}

                <header className='main-header'>
                    <img className='logo' src={logo} alt="website-logo" />
                    <img className='menue' src={menue} alt="menue-logo" />
                </header>

                {/* Main Content [ Text UI ] */}

                <main className='main-content'>
                    <h1 className='title-text'>
                        CREATE YOU OWN STORE NOW!
                    </h1>
                    <p className='text-info'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <button className='creat-store-btn'>
                        Create your store
                    </button>
                    <img className='main-image-ui' src={mainImage} alt="mainImage-ui" />
                </main>

                    <h1 className='packages-title'>PACKAGES</h1>
                <section className='packages-section'>
                    <div className='package'>
                        <div className='package-info'></div>
                        <p className='packag-price'>999 SAR</p>
                        <button className='package-btn'>GET ONE WEEK FREE!</button>
                    </div>
                    <div className='package'>
                        <div className="recomended">Recomended</div>
                        <div className='package-info'></div>
                        <p className='packag-price'>999 SAR</p>
                        <button className='package-btn'>GET ONE WEEK FREE!</button>
                    </div>
                </section>




        </>
    )
}

export default LandingPage