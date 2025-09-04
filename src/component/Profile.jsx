

import React, { useState } from 'react';


const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const [formData, setFormData] = useState({
    fullName: '',
    email: 'saniyamultani0001@gmail.com',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile Changes Saved!');
  };

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert('Password changed successfully!');
  };


    const orders = [
    {
      orderNumber: 1,
      orderId: '25072417552543',
      date: 'Thu, 24 Jul 2025',
      trackingId: 'TRK123456',
      status: 'Success',
      total: '₹ 3.00/-'
    }
  ];



  return (
    <>

        <div className='cstm-colectn-sec'>
                <div className='cstm-text-colect'>
                    <p className='cstm-shop'>Profile</p>
                    <p className='cstm-ho-shop '> Cart</p>
                </div>
            </div>


    <div className='container'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className="profile-card">
            {/* <div className="profile-img-wrapper">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="profile-img"
              />
              <span className="edit-icon">✎</span>
            </div> */}
            <h2 className="profile-name">Harriet Nunez</h2>

            <button className="appointment-btn mt-3" onClick={() => setActiveSection('profile')}>My Profile</button>
            <button className="appointment-btn mt-1" onClick={() => setActiveSection('password')}>Change Password</button>
            <button className="appointment-btn mt-1" onClick={() => setActiveSection('orders')}>Order List</button>
            <button className="appointment-btn mt-1">Logout</button>
          </div>
        </div>

        <div className='col-lg-8 mt-3'>
          {activeSection === 'profile' && (
            <div className="profile-container">
              <h2>Account Details</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className='cstm-form-input'
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                   className='cstm-form-input'
                />
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                   className='cstm-form-input'
                />
                <button type="submit" className="save-button">Save Changes</button>
              </form>

              <div className="whatsapp-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Icon"
                />
              </div>
            </div>
          )}

          {activeSection === 'password' && (
            <div className="password-form">
              <h2>Password Change</h2>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <button type="submit" className="save-button">Save Changes</button>
              </form>

              <div className="whatsapp-button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Icon"
                />
              </div>
            </div>
          )}

          {activeSection === 'orders' && (
            <div className="profile-container">
              <h2>Order List</h2>
              <p>This is where order history will appear.</p>
      <div className="order-table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Order Id</th>
              <th>Date Purchased</th>
              <th>Tracking Id</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderNumber}.</td>
                <td>{order.orderId}</td>
                <td className="green-text">{order.date}</td>
                <td>{order.trackingId}</td>
                <td>
                  <span className="status-badge success">{order.status}</span>
                </td>
                <td>{order.total}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            </div>
          )}
        </div>
      </div>
    </div>    
    </>
  );
};

export default Profile;
