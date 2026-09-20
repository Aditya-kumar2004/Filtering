//basic  filtering by react js 

import { useState } from 'react'
import './App.css'

function App() {
  //the data 
  const users = [
    { id: 1, name: "Aditya Kumar" },
    { id: 2, name: "Rahul Sharma" },
    { id: 3, name: "Aman Gupta" },
    { id: 4, name: "Rohit Verma" },
    { id: 5, name: "Priya Patel" },
    { id: 6, name: "Ananya Singh" },
    { id: 7, name: "Vikram Malhotra" },
    { id: 8, name: "Sneha Rao" },
    { id: 9, name: "Karthik Iyer" },
    { id: 10, name: "Neha Kapoor" },
    { id: 11, name: "Siddharth Joshi" },
    { id: 12, name: "Pooja Nair" },
    { id: 13, name: "Arjun Reddy" },
    { id: 14, name: "Deepika Padukone" },
    { id: 15, name: "Varun Dhawan" },
    { id: 16, name: "Kavita Krishnan" },
    { id: 17, name: "Manish Pandey" },
    { id: 18, name: "Riya Sen" },
    { id: 19, name: "Suresh Raina" },
    { id: 20, name: "Divya Agarwal" },
    { id: 21, name: "Kunal Shah" },
    { id: 22, name: "Tanvi Deshmukh" },
    { id: 23, name: "Harish Chandra" },
    { id: 24, name: "Meera Nambiar" },
    { id: 25, name: "Gaurav Chopra" },
    { id: 26, name: "Shreya Ghoshal" },
    { id: 27, name: "Nikhil Kamath" },
    { id: 28, name: "Pooja Hegde" },
    { id: 29, name: "Abhishek Bachchan" },
    { id: 30, name: "Ishaan Khatter" },
    { id: 31, name: "Sanya Malhotra" },
    { id: 32, name: "Rajesh Koothrappali" },
    { id: 33, name: "Simran Kaur" },
    { id: 34, name: "Devendra Fadnavis" },
    { id: 35, name: "Bhavna Menon" },
    { id: 36, name: "Tarun Tahiliani" },
    { id: 37, name: "Anushka Sharma" },
    { id: 38, name: "Mohit Chauhan" },
    { id: 39, name: "Swati Piramal" },
    { id: 40, name: "Alok Nath" },
    { id: 41, name: "Sunita Williams" },
    { id: 42, name: "Sachin Tendulkar" },
    { id: 43, name: "Preeti Zinta" },
    { id: 44, name: "Yashvardhan Raichand" },
    { id: 45, name: "Payal Singhal" },
    { id: 46, name: "Rohan Bopanna" },
    { id: 47, name: "Geeta Phogat" },
    { id: 48, name: "Farhan Akhtar" },
    { id: 49, name: "Zoya Akhtar" },
    { id: 50, name: "Kabir Khan" }
  ];

  const [search, setSearch] = useState("");

  //now we will make a filtering fucnton
  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search Bar</h2>
      <input
        type="text"
        placeholder="Search the User"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search-input"
      />
      <div className="user-list">
        {filterUser.map((user) => (
          <p key={user.id} className="user-card">
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
