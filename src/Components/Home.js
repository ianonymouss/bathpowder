import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Rejuvenate Like Royalty - Traditional Bath Powders
          </h1>
          <p className="primary-text">
          Reconnect and unwind. Immerse yourself in the tranquility of a traditional bath with our powders, 
          crafted with generations of wisdom. Nature's finest ingredients leave your skin soft and your spirit soothed.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" style={{ borderRadius: '50%', overflow: 'hidden' }}>
  <img src={BannerImage} alt="" />
</div>

      </div>
    </div>
  );
};

export default Home;
