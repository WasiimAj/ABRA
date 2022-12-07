import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/product/Product";
import Cart from "./components/Cart/Cart.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Validation from "./components/validation/validation.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import CheckoutDone from './components/CheckoutDone/CheckoutDone.jsx';
import Address from "./components/Address/Address.jsx";
import MyOrders from "./components/MyOrders/MyOrders.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/product_id"  element={ <Product /> } />
            <Route path="/cart"  element={ <Cart /> } />
            <Route path="/login"  element={ <Login /> } />
            <Route path="/signup"  element={ <Signup /> } />
            <Route path="/validation"  element={ <Validation /> } />
            <Route path="/checkout"  element={ <Checkout /> } />
            <Route path="/checkout-done" element={ <CheckoutDone/>} />
            <Route path="/my-address" element={ <Address/>} />
            <Route path="/my-orders" element={ <MyOrders/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
