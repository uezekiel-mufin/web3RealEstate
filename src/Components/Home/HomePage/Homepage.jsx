import React from "react";
import "./homepage.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepage__content'>
        <h1>YOUR PROPERTY IN THE METAVERSE</h1>
        <h4 className='homepageh4'>
          Have a digital version of the real world where you complete conquests,
          meet people and form guilds
        </h4>
        <h4 className='icon'>
          <PlayCircleOutlineIcon
            style={{
              boxSizing: "border-box",
              color: "#ffffff",
              fontSize: "56px",
              height: "56px",
              cursor: "pointer",
            }}
          />
        </h4>
        <h4 className='watch'>Watch Video</h4>
      </div>
    </div>
  );
};

export default Homepage;
