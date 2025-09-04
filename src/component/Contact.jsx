import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {

  const contacts = [
    {
      address: "KD-3, Pitampura, New Delhi-110034",
      email: "mail@axepertexhibits.com",
      phone: "+91 11-43220041/35503501",
    },

      {
      address: "KD-3, Pitampura, New Delhi-110034",
      email: "mail@axepertexhibits.com",
      phone: "+91 11-43220041/35503501",
    },

      {
      address: "KD-3, Pitampura, New Delhi-110034",
      email: "mail@axepertexhibits.com",
      phone: "+91 11-43220041/35503501",
    }
  ]



  return (
   <>
   <div  className='container'>
     <section className="contact-section mt-0">
      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Comment" rows="5" required></textarea>

            <div className="checkbox-row">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">
                Save my name, email, and website in this browser.
              </label>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="contact-image">
          <img src="assets/images/shirt97.jpg" alt="Shoes" />
        </div>
      </div>
    </section>
    </div>

      <div className="container my-5 text-center">
      <div className="row g-4">
        {contacts.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="contact-card p-4 text-white">
              <p><FaMapMarkerAlt className="icon" /> {item.address}</p>
              <p><FaEnvelope className="icon" /> {item.email}</p>
              <p><FaPhoneAlt className="icon" /> {item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='container mb-5'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756961717440!5m2!1sen!2sin" width="1300" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   </>
  )
}

export default Contact