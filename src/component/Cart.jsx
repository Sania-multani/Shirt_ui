import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faTruck
} from '@fortawesome/free-solid-svg-icons';


const initialCartItems = [
  {
    id: 1,
    name: 'Casual Shirt',
    price: 49.99,
    quantity: 2,
    image: '/assets/images/shirt41.png',
  },
  {
    id: 2,
    name: 'Casual Shirt',
    price: 89.99,
    quantity: 1,
    image: '/assets/images/shirt42.jpg',
  },
];

function Cart() {

    
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>

         <div className='cstm-colectn-sec'>
                <div className='cstm-text-colect'>
                    <p className='cstm-shop'>Cart</p>
                    <p className='cstm-ho-shop '> shop</p>
                </div>
            </div>

    
    {/* <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
</div> */}
    <div className="cart-page container mt-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item row align-items-center mb-3 p-3 border rounded">
              <div className="col-md-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-4">
                <h5>{item.name}</h5>
              </div>
              <div className="col-md-2">
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="col-md-2">
                <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <div className="text-end">
            <h4>Total: Rs.{getTotal()}</h4>
            <Link to="/checkout" className='cstm-cart-link'>
            <button className="btn cstm-proc mt-3 mb-5">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default Cart;
