import React from "react";
import Header from "../../components/Header";
import Donate from '../../assets/donate.png';
import Help from '../../assets/help.png';
import './recovery.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="box">
      <div className="images">
        <img src={Donate} alt="" cl/>
        <img src={Help} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Contact;
