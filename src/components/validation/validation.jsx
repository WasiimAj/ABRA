import "./validation.css";
import logo from "../../Images/ABRA-logo-light (1).png";

const Validation = () => {
    return (
        <>
            <div className="img-box">
                <img className="site-logo" src={logo} alt="website-logo" />
            </div>

            <div className="timer-box">
                <p className="timer">5:00</p>

                <p className="tip">
                    You will recive an sms with OTP number to verfiy you number:
                </p>

                <h1 className="phone-number">
                    +966 123456789
                </h1>

                <div className="code">
                    <input type="text" maxLength={1}/>
                    <input type="text" maxLength={1}/>
                    <input type="text" maxLength={1}/>
                    <input type="text" maxLength={1}/>
                    <input type="text" maxLength={1}/>
                    <input type="text" maxLength={1}/>
                </div>

                <button className="verfiy">
                    VERIFY
                </button>
            </div>
        </>
    )
}

export default Validation;