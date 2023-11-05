import React from "react";
import Banner from "../../Components/Banner";
import Featured from "../../Components/Featured";
import Imagery from "../../Components/Imagery";
import Services from "../../Components/Services";
import Offers from "../../Components/Offers";
import Testimonial from "../../Components/Testimonial";
import Team from "../../Components/Team";
import Galary from "../../Components/Galary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Imagery></Imagery>
      <Services></Services>
      <Offers></Offers>
      <Galary></Galary>
      <Team></Team>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
