import React from "react";
import Header from "../../components/Header";
import Mapp from "../../assets/map.jpg";
import './map.css'

const Map = () => {
  return (
    <div>
      <Header />
      <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6044.969830807474!2d-73.993056!3d40.7513582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzEyLjQiTiA3M8KwNTgnNTQuNyJX!5e0!3m2!1svi!2s!4v1600333050767!5m2!1svi!2s"
        width="1200"
        height="530"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      </div>
    </div>
  );
};

export default Map;
