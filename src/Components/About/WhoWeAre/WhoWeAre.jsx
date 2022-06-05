import React from "react";
import "./whoweare.css";
import Top from "../../../assets/rightTop.png";
import Middle from "../../../assets/right__middle.png";
import Bottom from "../../../assets/right__bottom.png";

const WhoWeAre = () => {
  return (
    <div className='whoContainer'>
      <div className='whoLeft'>
        <div className='left__top'>
          <img src={Top} alt='leftTop' />
        </div>
        <div className='left__middle'>
          <img src={Middle} alt='leftMiddle' />
        </div>
        <div className='left__bottom'>
          <img src={Bottom} alt='leftMiddle' />
        </div>
      </div>
      <div className='whoRight'>
        <h4 className='right__h4'>Fully Immersive game</h4>
        <h1 className='right__h1'>Who we are</h1>
        <h5 className='right__h5'>
          Lots of Lands is an immersive NFT-based game that is set in what we
          call meta-earth, a digital version of the real-world map. In this
          meta-reality players accumulate resources, territories and assets
          while interacting and building governance and business structures with
          each other. At its heart, Lots of Lands is all about freedom and
          autonomy.
        </h5>
      </div>
    </div>
  );
};

export default WhoWeAre;
