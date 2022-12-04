import './Login.css';
import logo from "../../Images/ABRA-logo-light (1).png";
import google from "../../Images/google-logo.png";
import facebook from "../../Images/facebook-logo.png";

const Login = () => {
    return (
        <>
            <img
                className='website-logo'
                src={logo}
                alt="abra-logo" 
            />

            <form action="">
                <input className='form-inputs' type="text" name='phone-number' placeholder='Phone Number' />
                <input className='form-inputs' type="password" name='password' placeholder='Password' />                
                <div className='forget-password'>
                    <a href='#f'>Forget Password ? </a>
                </div>
                <input className='form-inputs' type="submit" name='' value='LOGIN' />
            </form>

            <div className='line'>
                <h1 className='horizntal-line'>
                    or
                </h1>
            </div>

            <div className='login-with'>
                <a href='/google'>
                    <img 
                        src={google} 
                        alt="google-logo" 
                    />
                    Countine With Google
                </a>
                <a href='/facebook' className='facebook'>
                    <img 
                        src={facebook} 
                        alt="google-logo" 
                    />
                    Countine With Facebook
                </a>
                <p className='dont-have-account'>
                    Don't have account ?
                </p>
                <a href='/signup' className='custom1'>
                    SIGNUP NOW !
                </a>
            </div>
        </>
    )
}

export default Login;