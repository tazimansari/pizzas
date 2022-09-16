import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/pizza.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> pappy's Pizzeria </h1>
        <p> CHOICE THE PIZZA FOR EAT</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>  
      </div>
    </div>
  );  
}

export default Home;
