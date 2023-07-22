import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <p>Home Page</p>
      <div className="row">
        <div className="col-md-12">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
