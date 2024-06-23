import React from "react";
import Powder from "../Assets/powder.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Powder,
      title: "Why only this?",
      text: "Unleash the Breakthrough: Our unmatched formula, used daily for superior smoothness & glow - the ultimate bath powder.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Elevate Every Bath: Make Powders Your Daily Ritual",
    },
    
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Stress Less, Soak More: Our Powders Delivered Fast",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          
        Unveil Inner Glow: Natural powders bathe your skin, leaving a soft, smooth canvas for your beauty to shine.
<p className="primary-text">Banish Blemishes: Gentle buffing action removes impurities, revealing a clear, flawless complexion. </p>

<p className="primary-text">Kiss Dryness Goodbye: Nourishing ingredients pamper and hydrate, leaving skin supple and kissably soft. </p>

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
