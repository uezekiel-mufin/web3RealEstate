import React from "react";
import "./theTeam.css";
import Team1 from "../../assets/screencapture-lotsoflands-io-2022-04-26-22_43_59 2.png";
import Team2 from "../../assets/screencapture-lotsoflands-io-2022-04-26-22_43_59 3.png";
import Team3 from "../../assets/screencapture-lotsoflands-io-2022-04-26-22_43_59 4.png";
import Team4 from "../../assets/screencapture-lotsoflands-io-2022-04-26-22_43_59 5.png";
import { LinkedIn } from "@mui/icons-material";
const TheTeam = () => {
  const data = [
    {
      image: Team1,
      name: "Savannah Ngu",
      social: <LinkedIn />,
      position: "Founder & CEO",
    },
    {
      image: Team2,
      name: "Kathryn Murphy",
      social: <LinkedIn />,
      position: "Operations $ Support",
    },
    {
      image: Team3,
      name: "Ralph Edwards",
      social: <LinkedIn />,
      position: "Creative Director",
    },
    {
      image: Team4,
      name: "Darlene Robert",
      social: <LinkedIn />,
      position: "CTO",
    },
  ];
  return (
    <div className='team'>
      <h2 className='team__h2'>Meet The Team</h2>
      <div className='teamdetails'>
        {data.map((item, index) => (
          <div className='teamItem' key={index}>
            <img src={item.image} alt='itemImage' />
            <h2 className='socials'>
              {item.name}
              {item.social}
            </h2>
            <h5 className='teamPosition'>{item.position}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
