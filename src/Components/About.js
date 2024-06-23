import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/poster_p.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '50%', overflow: 'hidden' }}>
  <img src={AboutBackgroundImage} alt="" />
</div>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Indulge in the Ritual of Rejuvenation
        </h1>

        <p className="primary-text">
        Unwind and reconnect with yourself. Our traditional bath powders,
          crafted with time-honored recipes and nature's finest ingredients,
          transport you to a haven of tranquility. Immerse yourself in the gentle
          caress of these soothing blends, leaving your skin feeling soft,
          replenished, and radiating inner peace.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Know More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
