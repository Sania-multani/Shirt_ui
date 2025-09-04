import React from 'react'

const About = () => {
    return (
        <>
            <div className='cstm-colectn-sec'>
                <div className='cstm-text-colect'>
                    <p className='cstm-shop'>About</p>
                    <p className='cstm-ho-shop '> shop</p>
                </div>
            </div>



            <div className='container  mt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src="assets/images/shirt90.jpg" className='img-fluid '></img>
                    </div>

                    <div className='col-lg-6'>
                        <img src="assets/images/shirt88.jpg" className='img-fluid'></img>
                    </div>
                </div>

            </div>



            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <h2>Our Product</h2>
                        Casual Denim Shirt

                        "A timeless denim shirt designed for everyday wear. Soft, durable, and easy to style — perfect with jeans or chinos for a relaxed yet confident look."

                        2. Cotton Casual Shirt

                        "Crafted from 100% breathable cotton, this casual shirt keeps you cool and comfortable all day. A versatile choice for office hours or weekend outings."

                        3. Trendy Casual Shirt

                        "Stay ahead of the style curve with this trendy casual shirt. Lightweight fabric and modern patterns make it the ultimate pick for casual meetups or evening walks." 2. Cotton Casual Shirt

                        "Crafted from 100% breathable cotton, this casual shirt keeps you cool and comfortable all day. A versatile choice for office hours or weekend outings."

                        3. Trendy Casual Shirt

                        "Stay ahead of the style curve with this trendy casual shirt. Lightweight fabric and modern patterns make it the ultimate pick for casual meetups or evening walks." 
                    </div>
                    <div className='col-lg-7'>
                        <img src="assets/images/shirt95.jpg" className='img-fluid  w-100'></img>
                    </div>
                </div>
            </div>



              {/* Video Section */}
      {/* <h2 style={{ marginTop: "40px" }}>Our Story in Motion</h2> */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <video
         
        
          autoPlay
          loop
          muted
          style={{
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            maxWidth: "100%"
          }}
        >
          <source src="assets/images/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        </>
    )
}

export default About