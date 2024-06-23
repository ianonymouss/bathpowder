import React from "react";
import ProfilePic from "../Assets/poster.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Reviews</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        This bath powder is a game-changer! Not only does it leave my skin feeling squeaky clean, but it's also helped clear up my pimples. 
        Plus, the after-glow is amazing! My skin feels so healthy and I can't believe how quickly it became a part of my routine.
        </p>
      </div>
      <div className="author-section">
        <img src={ProfilePic} alt="" style={{ width: "110px", height: "125px", borderRadius: "50%" }} />
        <p>
        Parvati is a prominent Hindu goddess known for her beauty, grace, and association with mountains and nature. 
        This connection hints at the bath powder's potential natural ingredients and connection to relaxation.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2> Parvati Bath Powder</h2>
      </div>
    </div>
  );
};

export default Testimonial;
