import React from "react";
import Land from "./AbundantLand/Land";
import Earnings from "./BetterEarnings/Earnings";
import Works from "./HowItWorks/Works";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const About = () => {
  return (
    <div>
      <WhoWeAre />
      <Land />
      <Works />
      <Earnings />
    </div>
  );
};

export default About;
