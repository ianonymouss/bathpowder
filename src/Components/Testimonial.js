import React from "react";
import ProfilePic from "../Assets/ssh.jpg";
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
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Shri Harrsha</h2>
      </div>
    </div>
  );
};

export default Testimonial;
