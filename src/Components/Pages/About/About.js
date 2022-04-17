import React from "react";
import avatar from "../../../images/Untitled-1.png";
const About = () => {
  return (
    <div className='container'>
      <div className='d-flex align-items-center my-5'>
        <div>
          <img src={avatar} alt='' />
        </div>
        <div className='ms-5'>
          <h3 style={{ textAlign: "left" }}>Muhammad Khalid Umar</h3>
          <p style={{ textAlign: "left" }}>
            My short-term goal is to become a part of a company where I can
            utilize my knowledge and skills for the growth of the company as
            well as upgrade myself.
            <br />
            In long-term goal is I wanted to create a company based on
            technologies.
            {""}
            <h4>how i will work hard to achieve my goal</h4>
            <ul>
              <li>Break big goals into small tasks. </li>
              <li> Surround myself with motivated people. </li>
              <li> Give a litle breaks to myself. </li>
              <li>Remember why I'm Stay focused.</li>
              <li>Start my day with the most important task.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
