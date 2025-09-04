
import React, { useState } from 'react';


const cartItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 49.99,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 89.99,
    quantity: 1,
  },
];

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    zip: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✅ Order placed successfully!');
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
   
    
         <div className='cstm-colectn-sec'>
                <div className='cstm-text-colect'>
                    <p className='cstm-shop'>Checkout</p>
                    {/* <p className='cstm-ho-shop '> shop</p> */}
                </div>
            </div>

      {/* Checkout Form */}
      <div className="container checkout-container py-5">
        <div className="row g-4">
          {/* Billing Form */}
          <div className="col-lg-7">
            <div className="card shadow p-4 border-0">
              <h4 className="mb-4">Billing Information</h4>
              <form onSubmit={handleCheckout}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button className="btn cstm-plac w-100 p-2 fs-4" type="submit">
                   Place Order
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5">
            <div className="card shadow p-4 border-0 bg-light">
              <h4 className="mb-4">Order Summary</h4>
              <ul className="list-group mb-3">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                    <span className="text-muted">
                      Rs.{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>Rs.{getTotal()}</strong>
                </li>
              </ul>
              <p className="text-muted small mb-0">
                Your order will be processed and delivered to your provided address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
