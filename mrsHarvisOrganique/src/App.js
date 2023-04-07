import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './homePage/home';
import Product from './pages/products/product';
import About from './pages/about/about';
import Condition from './pages/condition/condition';
import Shipping from './pages/shipping/shipping';
import Cookies from './pages/cookies/cookies';
import Return from './pages/return/return';
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/wishlist';
import Login from './login/login';
import ProductDetail from './pages/productDtails/productDetail';
import Profile from './userprofile/profile';
import Address from './userprofile/userAddress/address';
import LastOrder from './userprofile/lastOrder/lastOrder';
import Checkout from './pages/checkout/checkout';
import Shiping from './pages/cart/shiping';

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="condition" element={<Condition />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="return" element={<Return />} />
          <Route path="login" element={<Login />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<LastOrder />} />
          <Route
            path="checkout/please fill all required fields /:toPrice/and checkout to payment section"
            element={<Checkout />}
          />
          {/* -------- */}
          <Route path="Shiping/:toPrice" element={<Shiping />} />
          {/* ------------- */}
          <Route path="/profile" element={<Profile />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="wishlist/:id" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}
