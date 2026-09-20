//basic  filtering by react js 

import { useState } from 'react'
import './App.css'

function App() {
  //the data 
  const users = [
    { id: 1, name: "Aditya Kumar", email: "aditya.kumar@gmail.com" },
    { id: 2, name: "Rahul Sharma", email: "rahul.sharma@gmail.com" },
    { id: 3, name: "Aman Gupta", email: "aman.gupta@gmail.com" },
    { id: 4, name: "Rohit Verma", email: "rohit.verma@gmail.com" },
    { id: 5, name: "Priya Patel", email: "priya.patel@gmail.com" },
    { id: 6, name: "Ananya Singh", email: "ananya.singh@gmail.com" },
    { id: 7, name: "Vikram Malhotra", email: "vikram.malhotra@gmail.com" },
    { id: 8, name: "Sneha Rao", email: "sneha.rao@gmail.com" },
    { id: 9, name: "Karthik Iyer", email: "karthik.iyer@gmail.com" },
    { id: 10, name: "Neha Kapoor", email: "neha.kapoor@gmail.com" },
    { id: 11, name: "Siddharth Joshi", email: "siddharth.joshi@gmail.com" },
    { id: 12, name: "Pooja Nair", email: "pooja.nair@gmail.com" },
    { id: 13, name: "Arjun Reddy", email: "arjun.reddy@gmail.com" },
    { id: 14, name: "Deepika Padukone", email: "deepika.padukone@gmail.com" },
    { id: 15, name: "Varun Dhawan", email: "varun.dhawan@gmail.com" },
    { id: 16, name: "Kavita Krishnan", email: "kavita.krishnan@gmail.com" },
    { id: 17, name: "Manish Pandey", email: "manish.pandey@gmail.com" },
    { id: 18, name: "Riya Sen", email: "riya.sen@gmail.com" },
    { id: 19, name: "Suresh Raina", email: "suresh.raina@gmail.com" },
    { id: 20, name: "Divya Agarwal", email: "divya.agarwal@gmail.com" },
    { id: 21, name: "Kunal Shah", email: "kunal.shah@gmail.com" },
    { id: 22, name: "Tanvi Deshmukh", email: "tanvi.deshmukh@gmail.com" },
    { id: 23, name: "Harish Chandra", email: "harish.chandra@gmail.com" },
    { id: 24, name: "Meera Nambiar", email: "meera.nambiar@gmail.com" },
    { id: 25, name: "Gaurav Chopra", email: "gaurav.chopra@gmail.com" },
    { id: 26, name: "Shreya Ghoshal", email: "shreya.ghoshal@gmail.com" },
    { id: 27, name: "Nikhil Kamath", email: "nikhil.kamath@gmail.com" },
    { id: 28, name: "Pooja Hegde", email: "pooja.hegde@gmail.com" },
    { id: 29, name: "Abhishek Bachchan", email: "abhishek.bachchan@gmail.com" },
    { id: 30, name: "Ishaan Khatter", email: "ishaan.khatter@gmail.com" },
    { id: 31, name: "Sanya Malhotra", email: "sanya.malhotra@gmail.com" },
    { id: 32, name: "Rajesh Koothrappali", email: "rajesh.k@gmail.com" },
    { id: 33, name: "Simran Kaur", email: "simran.kaur@gmail.com" },
    { id: 34, name: "Devendra Fadnavis", email: "devendra.f@gmail.com" },
    { id: 35, name: "Bhavna Menon", email: "bhavna.menon@gmail.com" },
    { id: 36, name: "Tarun Tahiliani", email: "tarun.t@gmail.com" },
    { id: 37, name: "Anushka Sharma", email: "anushka.sharma@gmail.com" },
    { id: 38, name: "Mohit Chauhan", email: "mohit.chauhan@gmail.com" },
    { id: 39, name: "Swati Piramal", email: "swati.piramal@gmail.com" },
    { id: 40, name: "Alok Nath", email: "alok.nath@gmail.com" },
    { id: 41, name: "Sunita Williams", email: "sunita.williams@gmail.com" },
    { id: 42, name: "Sachin Tendulkar", email: "sachin.tendulkar@gmail.com" },
    { id: 43, name: "Preeti Zinta", email: "preeti.zinta@gmail.com" },
    { id: 44, name: "Yashvardhan Raichand", email: "yash.raichand@gmail.com" },
    { id: 45, name: "Payal Singhal", email: "payal.singhal@gmail.com" },
    { id: 46, name: "Rohan Bopanna", email: "rohan.bopanna@gmail.com" },
    { id: 47, name: "Geeta Phogat", email: "geeta.phogat@gmail.com" },
    { id: 48, name: "Farhan Akhtar", email: "farhan.akhtar@gmail.com" },
    { id: 49, name: "Zoya Akhtar", email: "zoya.akhtar@gmail.com" },
    { id: 50, name: "Kabir Khan", email: "kabir.khan@gmail.com" }
  ];

  const [search, setSearch] = useState("");

  //now we will make a filtering fucnton
  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search Bar</h2>
      <input
        type="text"
        placeholder="Search the User by name or email"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search-input"
      />

      <div className="user-list">
        <div className="flex">
          <p>Name</p>
          <p>Email</p>
        </div>
        {filterUser.map((user) => (
          <p key={user.id} className="user-card">
            {user.name} - {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
