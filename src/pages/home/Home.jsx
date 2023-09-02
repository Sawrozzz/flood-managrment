import React from "react";
import Header from "../../components/Header";
import Map from "../map/Map";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home section" >
      <Header />
      <div className="home_title">
        <p>" <span>Water Station</span> in your pocket "</p>
      </div>
      <p className="home_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sunt.</p>
      <Link to='prediction'>
        <button>Am I in Danger???</button>
      </Link>
    </section>
  );
};

export default Home;
