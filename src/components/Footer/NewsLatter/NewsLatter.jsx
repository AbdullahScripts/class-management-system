import React from 'react'

import "./NewsLatter.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";



const NewsLatter = () => {
  return (
    <div className="newsletter-section">
    <div className="newsletter-content">
      <span className="small-text">Want to Connect</span>
      <span className="big-text">Will be very pleased to you</span>
      <div className="form">
          <input type="text" placeholder="email address" />
          <button>Subscribe</button>
      </div>
      <div className="text">Will be used accordig to our privacy policy</div>
      <div className="social-icons">
          <div className="icon">
              <FaFacebookF size={14} />
          </div>
          <div className="icon">
              <FaTwitter size={14} />
          </div>
          <div className="icon">
              <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
              <FaInstagram size={14} />
          </div>
      </div>
    </div>
  </div>
  )
}

export default NewsLatter