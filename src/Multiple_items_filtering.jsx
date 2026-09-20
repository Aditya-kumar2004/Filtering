//basic  filtering by react js 

import { useState } from 'react'
import './App.css'

function App() {
  //the data 
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Shirt", category: "Clothing", price: 1000 },
    { id: 3, name: "Phone", category: "Electronics", price: 20000 },
    { id: 4, name: "Headphones", category: "Electronics", price: 3000 },
    { id: 5, name: "Jeans", category: "Clothing", price: 2500 },
    { id: 6, name: "Shoes", category: "Footwear", price: 4000 },
    { id: 7, name: "Watch", category: "Accessories", price: 7000 },
    { id: 8, name: "Backpack", category: "Accessories", price: 1500 }
  ];

  // 3 separate search states for Name, Category, and Price
  const [nameSearch, setNameSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [priceSearch, setPriceSearch] = useState("");

  //now we will make a filtering function using all 3 criteria
  const filterProducts = products.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(nameSearch.toLowerCase());
    const matchesCategory = item.category.toLowerCase().includes(categorySearch.toLowerCase());
    const matchesPrice = item.price.toString().includes(priceSearch);

    return matchesName && matchesCategory && matchesPrice;
  });

  return (
    <div className="container">
      <h2>Search Products</h2>

      {/* 3 Separate Search Inputs */}
      <div className="search-inputs-group">
        <input
          type="text"
          placeholder="Search by Name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by Category"
          value={categorySearch}
          onChange={(e) => setCategorySearch(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by Price"
          value={priceSearch}
          onChange={(e) => setPriceSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="user-list">
        <div className="list-header">
          <span>Name</span>
          <span>Category</span>
          <span className="price-col">Price</span>
        </div>
        {/* by using ternarnary operator */}
        {filterProducts.length > 0 ? (
          filterProducts.map((prod) => (
            <div key={prod.id} className="user-card">
              <span className="user-name">{prod.name}</span>
              <span className="user-category">{prod.category}</span>
              <span className="user-price">₹{prod.price}</span>
            </div>
          ))
        ) : (
          <p className="no-result">No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
