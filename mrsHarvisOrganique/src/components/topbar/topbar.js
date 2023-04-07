import React, { useState, useEffect } from 'react';
import './topbar.css';
import logo from '../../img/logotest.png';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

import userIcon from '../../img/icon/user_icon.svg';
import cartIcon from '../../img/icon/cart_icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  const cartCount = useSelector((state) => state.cartReducer.carts);
  // console.log("data");
  console.log(cartCount);

  const wishlistCount = useSelector((state) => state.wishlistReducer.wishlist);
  // console.log("wishlist");
  // console.log(wishlistCount);

  // const userToken = useSelector((state) => state.userReducer).user;
  // console.log("token",userToken)

  const history = useNavigate();

  const routeChangeWishlist = () => {
    let path = `newPath`;
    history('/checkout');
  };

  const routeChangeProfile = () => {
    let path = `newPath`;
    history('/checkout');
  };

  const routeChangeCart = () => {
    let path = `newPath`;
    history('/checkout');
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="container header">
        <div className="header__logo">
          <a href="/">
            <img className="header_logo" src={logo} />
          </a>
        </div>
        <div className="header_right_menu" id="left_mobile_menu">
          {localStorage.getItem('token') ? (
            <Link to="/profile">
              <div className="header_login_icon">
                <img
                  src={userIcon}
                  width={16}
                  height={16}
                  onClick={routeChangeProfile}
                />
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="header_login_icon">Login</div>
            </Link>
          )}

          <Link to={`/wishlist/${wishlistCount.id}`}>
            <div className="header_logo_icon">
              <div className="pcount">{wishlistCount.length} </div>
              <AiOutlineHeart onClick={routeChangeWishlist} />
            </div>
          </Link>

          <Link to={`/cart/${cartCount.id}`}>
            <div className="header_logo_icon">
              <div className="pcount">{cartCount.length}</div>
              <img src={cartIcon} alt="" onClick={routeChangeCart} />
            </div>
          </Link>
        </div>
        <div className="header__options">
          <div className="header__menu">
            {(toggleMenu || screenWidth > 768) && (
              <ul className="list">
                <li className="items">
                  <Link to="/home">Home</Link>
                </li>
                <li className="items">
                  <Link to="/product">Products</Link>
                </li>
                <li className="items" id="dropdown_option_web">
                  <Link to="">About Us</Link>
                  <ul className="dropdown">
                    <li className="items">
                      <Link to="/condition">Terms & Conditions</Link>
                    </li>
                    <li className="items">
                      <Link to="/shipping">Shipping Policies</Link>
                    </li>
                    <li className="items">
                      <Link to="/cookies">Cookies Policies</Link>
                    </li>
                    <li className="items">
                      <Link to="/return">Cancel & Return Policies</Link>
                    </li>
                    <li className="items">
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </li>

                <li className="items" id="option_mopbile_menu">
                  <Link to="">About Us</Link>
                </li>
                <li className="items" id="option_mopbile_menu">
                  <Link to="/condition">Terms & Conditions</Link>
                </li>
                <li className="items" id="option_mopbile_menu">
                  <Link to="/shipping">Shipping Policies</Link>
                </li>
                <li className="items" id="option_mopbile_menu">
                  <Link to="/cookies">Cookies Policies</Link>
                </li>
                <li className="items" id="option_mopbile_menu">
                  <Link to="/return">Cancel & Return Policies</Link>
                </li>
                <li className="items" id="option_mopbile_menu">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            )}
            <a onClick={toggleNav} className="btn">
              <AiOutlineMenu />
            </a>
          </div>
        </div>
        <div className="header_right_menu" id="right_web_menu">
          {localStorage.getItem('token') ? (
            <Link to="/profile">
              <div className="header_login_icon">
                <img
                  src={userIcon}
                  width={16}
                  height={16}
                  onClick={routeChangeProfile}
                />
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="header_login_icon">Login</div>
            </Link>
          )}

          <Link to={`/wishlist/${wishlistCount.id}`}>
            <div className="header_logo_icon">
              <div className="pcount">{wishlistCount.length} </div>
              <AiOutlineHeart onClick={routeChangeWishlist} />
            </div>
          </Link>

          <Link to={`/cart/${cartCount.id}`}>
            <div className="header_logo_icon">
              <div className="pcount">{cartCount.length}</div>
              <img src={cartIcon} alt="" onClick={routeChangeCart} />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
