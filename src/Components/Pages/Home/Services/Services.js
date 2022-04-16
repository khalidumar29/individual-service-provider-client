import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    // <div className='container'>
    //   <div>
    //     <h1 style={{ color: "#514d99", margin: "40px 0" }}>My Services</h1>
    //   </div>
    //   <div className='services-wraper my-3'>
    //     {classes.map((data) => (
    //       <Service key={data.id} data={data}></Service>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Services;
