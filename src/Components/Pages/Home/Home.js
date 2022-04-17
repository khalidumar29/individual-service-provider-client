import React from "react";
import Faq from "./Faq/Faq";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Faq></Faq>
    </div>
  );
};

export default Home;
