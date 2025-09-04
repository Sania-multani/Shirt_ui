import React from 'react'


 const products = [
    {
      name: 'Look 03',
      image: 'assets/images/shirt41.png',
      tag: 'Sale',
      oldPrice: 25,
      price: 20,
    },
    {
      name: 'Look 04',
      image: 'assets/images/shirt42.jpg',
      tag: 'New',
      price: 25,
    },
    {
      name: 'Look 05',
      image: 'assets/images/shirt43.jpg',
      tag: 'New',
      price: 35,
    },
     {
      name: 'Look 05',
      image: 'assets/images/shirt52.jpg',
      tag: 'New',
      price: 35,
    },
     {
      name: 'Look 05',
      image: 'assets/images/shirt53.jpg',
      tag: 'New',
      price: 35,
    },
     {
      name: 'Look 05',
      image: 'assets/images/shirt49.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt54.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt55.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt57.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt58.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt59.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt70.jpg',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt41.png',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt41.png',
      tag: 'New',
      price: 35,
    }, {
      name: 'Look 05',
      image: 'assets/images/shirt41.png',
      tag: 'New',
      price: 35,
    },
  ];


const Collection = () => {
  return (
    <>

    <div className='cstm-colectn-sec'>
     <div className='cstm-text-colect'>
      <p className='cstm-shop'>Shop</p>
      <p className='cstm-ho-shop '> Home</p>
     </div>
    </div>


    <div className="product-page mt-5">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="category-list ">
          <li>All Products</li>
          <li>Men</li>
          <li>Women</li>
          <li>Outlet</li>
          <li>New</li>
          <li>Sale</li>
        </ul>

        <div className="filter-section">
          <h6>Filter by</h6>
          <div className="filter-block">
            <label>Price</label>
            <input type="range" min="15" max="35" />
            <div className="range-values">$15 — $35</div>
          </div>

          <div className="filter-block">
            <label>Color</label>
            <button className="expand-btn">+</button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            {product.tag && <span className="product-tag">{product.tag}</span>}
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <div className="price">
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}
              <span className="new-price">Rs.{product.price}</span>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Collection