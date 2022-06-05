import React from "react";
import "./works.css";
import WorkImage from "../../../assets/worksImage.png";
import Frame7 from "../../../assets/Frame_7 2.png";

const Works = () => {
  return (
    <div className='works'>
      <div className='workLeft'>
        <h4 className='workLeft__h4'>Fully Immersive game</h4>
        <h1 className='workLeft__h1'>How it works</h1>
        <h5 className='workLeft__h5'>
          Players are presented with a fun and compelling gaming experience in
          which they are able to pursue whatever paths of development and action
          they want. Players goals will not always align with each other, which
          is something that will have to factor in players strategies.
        </h5>
      </div>

      <div className='workRight'>
        <div className='frame'>
          <img src={WorkImage} alt='workImage' />
        </div>
        <div className='frame7'>
          <img src={Frame7} alt='frame7' />
        </div>
      </div>
    </div>
  );
};

export default Works;
