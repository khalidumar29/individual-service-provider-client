import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "./../../../../images/banner/banner1.png";
import banner2 from "./../../../../images/banner/banner2.png";
import banner3 from "./../../../../images/banner/banner3.png";
import "./Slider.css";
const Slider = () => {
  return (
    <div className='container my-2'>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className='d-block w-100  slider-img'
            src={banner1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Choose Your Favorite One</h3>
            <p style={{ color: "black" }}>
              I'm here for help your study, you can hire me as a tutor !!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className='d-block w-100 slider-img'
            src={banner2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Back to your onlie school</h3>
            <p style={{ color: "black" }}>
              I'm here for help your study, you can hire me as a tutor !!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className='d-block w-100 slider-img'
            src={banner3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Please Donate for grow up you'r school
            </h3>
            <p style={{ color: "black" }}>
              I'm here for help your study, you can hire me as a tutor !!{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
