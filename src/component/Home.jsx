import React from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAlignRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';



const categories = [
  { label: 'White Shirt', image: '/assets/images/shirt48.jpg' },
  { label: 'Casual Wear', image: '/assets/images/shirt35.png' },
  { label: 'Shirts', image: '/assets/images/shirt41.jpg' },
  { label: 'Formal Wear', image: '/assets/images/shirt42.jpg' },
  { label: 'Outwear', image: '/assets/images/shirt47.jpg' },
  { label: 'Formal Wear', image: '/assets/images/shirt41.png' },
];











const testimonials = [
  {
    id: 1,
    text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
    name: "Samuel Edwards",
    role: "Business man",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
    name: "Sarah Johnson",
    role: "Business woman",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
    name: "Emily Brown",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];







   const images = [
    'assets/images/shirt50.jpg',
    'assets/images/shirt52.jpg',
    'assets/images/shirt72.jpg',
     'assets/images/shirt50.jpg',
    'assets/images/shirt52.jpg',
    'assets/images/shirt72.jpg',
     'assets/images/shirt50.jpg',
    'assets/images/shirt52.jpg',
    'assets/images/shirt72.jpg',
     'assets/images/shirt50.jpg',
    'assets/images/shirt52.jpg',
    'assets/images/shirt72.jpg',
  ];












function Home() {



  


  return (
    <>

     <div>
      <img src="assets/images/shirt40.jpg"  className="cstm-img-sec"></img>
     </div>




     <p className="text-center mt-5 cstm-catg-sec">  Category</p>

    <div className="category-container">
      {categories.map((category) => (
        <div key={category.label} className="category-item">
          <img src={category.image} alt={category.label} />
          <span >{category.label}</span>
        </div>
      ))}
    </div>
    



    <p className="text-center mt-5 cstm-trend-head">Trending</p>

    <div className="container-fluid py-4">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={30}
        slidesPerView={4} 
        navigation
        // pagination={{ clickable: true }}
        autoplay={{delay:1000}}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} className="img-fluid" alt={`Shirt ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>





    <div className="container-fluid">
      <img src="assets/images/shirt79.jpg" className="w-100"></img>
    </div>





    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
                <div className="col-lg-6">
                  <div className="cstm-a ">
                       <img src="assets/images/shirt80.jpg" className="img-fluid"></img>
                       <div className="cstm-b">
                         <button type="button" className="cstm-c">SHOP NOW</button>
                       </div>
                       </div>
                </div>
                <div className="col-lg-6">
                        {/* <img src="assets/images/shirt81.jpg" className="img-fluid"></img> */}
                        <div className="cstm-a ">
                       <img src="assets/images/shirt81.jpg" className="img-fluid"></img>
                       <div className="cstm-b">
                         <button type="button" className="cstm-c">SHOP NOW</button>
                       </div>
                       </div>
                </div>
          </div>

            <div className="row mt-5">
                <div className="col-lg-6">
                       {/* <img src="assets/images/shirt82.jpg" className="img-fluid"></img> */}
                       <div className="cstm-a ">
                       <img src="assets/images/shirt82.jpg" className="img-fluid"></img>
                       <div className="cstm-b">
                         <button type="button" className="cstm-c">SHOP NOW</button>
                       </div>
                       </div>
                </div>
                <div className="col-lg-6">
                        {/* <img src="assets/images/shirt83.jpg" className="img-fluid"></img> */}
                        <div className="cstm-a ">
                       <img src="assets/images/shirt83.jpg" className="img-fluid"></img>
                       <div className="cstm-b">
                         <button type="button" className="cstm-c">SHOP NOW</button>
                       </div>
                       </div>
                </div>
          </div>

          
            
        </div>
         <div className="col-lg-6">
          <div className="cstm-d">
             <img src="assets/images/shirt84.jpg"  className="img-fluid"></img>
                <div className="cstm-e">
                         <button type="button" className="cstm-f">SHOP NOW</button>
                       </div>
             </div>
        </div>
        
      </div>
    </div>
        




      <p className="cstm-prdt-headg mt-5">Product</p> 
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div  className="cstm-big-div-prdt">
            <img src="assets/images/shirt59.jpg" className="img-fluid   cstm-prodt-sec"></img>
            {/* <div  className="cstm-add-cart-btn">
              <button type="button" className=" cstm-add" >SHOP NOW</button>
            </div> */}
             <div  className="cstm-add-cart-btn">
              <p className="mt-3 cstm-text-prdt">Blue Shirt</p>
              <p className="text-white cstm-rs-sec ">Rs.230</p>
              
              <button type="button" className=" mt-3 cstm-add" >Add To Card</button>
                <button type="button" className=" ms-5 cstm-add" >Buy Now</button>
            </div>
            </div>
        </div>

         <div className="col-lg-3">
             <div  className="cstm-big-div-prdt">
            <img src="assets/images/shirt70.jpg" className="img-fluid   cstm-prodt-sec"></img>
            <div  className="cstm-add-cart-btn">
              <p className="mt-3 cstm-text-prdt">Blue Shirt</p>
              <p className="text-white cstm-rs-sec ">Rs.230</p>
              
              <button type="button" className=" mt-3 cstm-add" >Add To Card</button>
                <button type="button" className=" ms-5 cstm-add" >Buy Now</button>
            </div>
            </div>
        </div>
         <div className="col-lg-3">
             <div  className="cstm-big-div-prdt">
            <img src="assets/images/shirt71.jpg" className="img-fluid   cstm-prodt-sec"></img>
            {/* <div  className="cstm-add-cart-btn">
              <button type="button" className="mt-5 cstm-add" >Add To Card</button>
                 <button type="button" className="mt-5 ms-5 cstm-add" >Buy Now</button>
            </div> */}
             <div  className="cstm-add-cart-btn">
              <p className="mt-3 cstm-text-prdt">Blue Shirt</p>
              <p className="text-white cstm-rs-sec ">Rs.230</p>
              
              <button type="button" className=" mt-3 cstm-add" >Add To Card</button>
                <button type="button" className=" ms-5 cstm-add" >Buy Now</button>
            </div>
            </div>
        </div>
         <div className="col-lg-3">
            {/* <img src="assets/images/shirt52.jpg" className="img-fluid"></img> */}
             <div  className="cstm-big-div-prdt">
            <img src="assets/images/shirt52.jpg" className="img-fluid   cstm-prodt-sec"></img>
            {/* <div  className="cstm-add-cart-btn">
             
               <button type="button" className="mt-5  cstm-add" >Buy Now</button>
                <button type="button" className="mt-5   ms-5 cstm-add" >Add To Card</button>
            </div> */}
             <div  className="cstm-add-cart-btn">
              <p className="mt-3 cstm-text-prdt">Blue Shirt</p>
              <p className="text-white cstm-rs-sec ">Rs.230</p>
              
              <button type="button" className=" mt-3 cstm-add" >Add To Card</button>
                <button type="button" className=" ms-5 cstm-add" >Buy Now</button>
            </div>
            </div>
        </div>
      </div>
      </div>




    



      <section
        className="testimonials-section"
      // style={{ backgroundImage: `url(assets/images/img70.jpg)` }}
      >
        <div className="container">
          <p className="section-subtitle">Testimonial</p>
          <h2 className="section-title">What they say about us</h2>
          {/* <p className="section-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p> */}

          <div className="testimonials-grid mt-4">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="author-img" />
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> */}




    </>
  );
}

export default Home;


