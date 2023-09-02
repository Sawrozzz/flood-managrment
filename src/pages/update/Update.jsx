import React from "react";
import Header from "../../components/Header";
import './update.css'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.jpg'
import Image3 from '../../assets/image3.jpg'

const Portfolio = () => {
  return (
    <div>
      <Header />
      <>
        <div className="news">
          <h1>
            Top <span>News</span>
          </h1>
        </div>
        <section className="news-section">
          <div className="news-item">
            <h3>Date:2080-05-15</h3>
            <img src={Image1} alt="News Image 1" />
            <h2>Breaking News 1</h2>
            <p>
              Cars are fully drawn in the water due to flood that occurs today.
              Due to the high rainall that occurs from last 3 days straight.
              More...........
            </p>
            <a href="#">Read More</a>
          </div>
          <div className="news-item">
            <h3>Date:2080-05-15</h3>
            <img src={Image2} alt="News Image 2" />
            <h2>Breaking News 2</h2>
            <p>
              Cars are partialy drawn in the water due to flood that occurs
              today. Due to the high rainall that occurs from last 3 days
              straight. More...........{" "}
            </p>
            <a href="#">Read More</a>
          </div>
          <div className="news-item">
            <h3>Date:2080-05-15</h3>
            <img src={Image3} alt="News Image 2" />
            <h2>Breaking News 2</h2>
            <p>
              Houses are partially drawn in the water due to flood that occurs
              today. Due to the high rainall that occurs from last 3 days
              straight. More...........{" "}
            </p>
            <a href="#">Read More</a>
          </div>
        </section>
      </>
    </div>
  );
};

export default Portfolio;
