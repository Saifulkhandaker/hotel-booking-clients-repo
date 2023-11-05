import React from "react";
import Banner from "../../Components/Banner";
import Featured from "../../Components/Featured";
import Imagery from "../../Components/Imagery";
import Services from "../../Components/Services";
import Offers from "../../Components/Offers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Imagery></Imagery>
      <Services></Services>
      <Offers></Offers>
    </div>
  );
};

export default Home;
