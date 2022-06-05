import React from "react";
import "./community.css";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@mui/material";
// import Unknown3 from '../../assets/Unknown-3.png'
const Community = () => {
  return (
    <div className='community'>
      <FaDiscord style={{ fontSize: "4rem", color: "#ffffff" }} />
      <h1>JOIN OUR COMMUNITY</h1>
      <h3>
        Your style should match one of the styles singled out in the reference
        section, or should be similar to it
      </h3>
      <Button>Join Discord</Button>
    </div>
  );
};

export default Community;
