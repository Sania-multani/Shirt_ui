import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAlignRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



 const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/shirt41.png", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/shirt42.jpg", // Replace with real image
  },
];


    const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


const Header = () => {


   const menuItems = [
  { label: "HOME", target: "/" },
  { label: "COLLECTIONS", target: "/shop" },
  { label: "ABOUT US", target: "/about" },
  { label: "CONTACT US", target: "/contact" },
    { label: "BLOG", target: "/blog" },
];

const[menuOpen,setMenuOpen]=useState(true)
   const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm   cstm-a-nav">
        <div className="container-fluid px-4">
          {/* Logo */}
          {/* <a className="navbar-brand fw-bold logo-text" href="#"> */}
          <img src="assets/images/logo2.png" className=" cstm-logo"></img>
          {/* </a> */}

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <GiHamburgerMenu />
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              {/* Search */}

              <li>
                <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> <FaAlignRight size={25} /></button>

              </li>
              <li className="nav-item mx-2">
                <a href="#" className="nav-link">
                  <FaSearch size={25} onClick={() => setIsSearchOpen(true)}  className='mt-1' />
                </a>
              </li>
              {/* User */}
              <li className="nav-item mx-2">
                <NavLink to="/login" className="nav-link">
                  <FaUser size={25} />
                </NavLink>
              </li>
              {/* Cart */}
              <li className="nav-item mx-2">
                <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <FaShoppingBag  size={25}/></button>
             
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
  
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body  cstm-body-sec">
    <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map(({ label, target }) => (
            <div  className='cstm-nav-sec'>
            <a
              key={label}
              href={target}
              onClick={() => setMenuOpen(false)}
              className="nav-odometer  cstm-ul-nav"
              data-text={label}
            >
              <span>{label}</span>
            </a>
            </div>
          ))}
        </nav>

  </div>
</div>



   {isSearchOpen && (
        <div className="search-overlay">
          <input type="text" className="search-input" placeholder="Search..." />
          <FaTimes className="close-icon" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}



      
         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <NavLink to="/cart">
          <button className="btn cstm-check-cart w-100 p-2 mt-3">Checkout</button>
          </NavLink>
  </div>
</div>

    </>
  )
}

export default Header