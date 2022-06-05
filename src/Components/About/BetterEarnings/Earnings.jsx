import React from "react";
import "./earnings.css";
import earnings from "../../../assets/earnings.png";
import Frame8 from "../../../assets/earningsFrame.png";

const Earnings = () => {
  return (
    <div className='earnings'>
      <div className='earningsRight'>
        <div className='earningsImage'>
          <img src={earnings} alt='earningsImage' />
        </div>
        <div className='earnings7'>
          <img src={Frame8} alt='frame8' />
        </div>
      </div>
      <div className='earningsLeft'>
        <h4 className='earningsLeft__h4'>Unique Offerings</h4>
        <h1 className='earningsLeft__h1'>Better earnings for players</h1>
        <h5 className='earningsLeft__h5'>
          Thanks to the technological underpinnings of the game, the results of
          actions taken have real economic consequences.
        </h5>
        <h5 className='earningsLeft__h5'>
          Rather than the play-to-earn model that most blockchain games are
          built upon,
          <span style={{ color: "#00B3FC" }}>
            Lots of Lands is built on a play-and-earn model
          </span>
          , where neither aspect takes precedence over the other.
        </h5>
      </div>
    </div>
  );
};

export default Earnings;
