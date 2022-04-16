import React from "react";
import "./Footer.css";
import footerLogo from "./../../../images/logo.png";
const Footer = () => {
  return (
    <footer className='bg-dark' style={{ color: "black" }}>
      <div className='container py-5 d-flex justify-content-between align-items-center'>
        <div className='footer-logo'>
          <img height={80} src={footerLogo} alt='' />
        </div>
        <div className='footer-des d-flex justify-content-between'>
          <ul>
            <li>
              <a href='#'>Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'>Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'> Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'> Accept Terms And Conditon</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'>Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'> Accept Terms And Conditon</a>
            </li>
            <li>
              <a href='#'> Accept Terms And Conditon</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='copy-dov'>
        <p>&#169; copy right reserved to tutor.com</p>
      </div>
    </footer>
  );
};

export default Footer;
