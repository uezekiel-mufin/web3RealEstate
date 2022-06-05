import React from "react";
import "./land.css";
import Image from "../../../assets/Image.png";
import Image1 from "../../../assets/Image (1).png";
import Image2 from "../../../assets/Image (2).png";
import Vector from "../../../assets/vector.avif";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const Land = () => {
  return (
    <div className='land'>
      <div className='landLeft'>
        <div className='landLeftTop'>
          <h4 className='land__h4'>Abundant Land Supply</h4>
          <h1 className='land__h1'>
            1.9 MILLIION UNIQUE PLOTS OF VIRTUAL LAND
          </h1>
          <h5 className='land__h5'>
            Lots of Land is a virtual world where users can buy, sell, collect,
            and curate over 64 billion unique plots of virtual land.
          </h5>
          <h5 className='land__h5'>
            The Lots of land virtual real estate platform is mapped over the
            entire surface of the globe,
          </h5>
        </div>

        <div className='image__section'>
          <div className='bottomImage'>
            <div>
              <img src={Image} alt='image1' />
            </div>
            <div className='firstImage'>
              <img src={Image1} alt='image2' />
            </div>
            <div>
              <img src={Image2} alt='image3' />
            </div>
          </div>
          <div className='image__bottom'>
            <h3>1/2</h3>
            <h3 className='icons'>
              <ChevronLeftRoundedIcon
                style={{
                  background: "#ffffff",
                  borderRadius: "50%",
                  color: "#9598A7",
                  border: "1px solid #9598A7",
                }}
              />
              <ChevronRightRoundedIcon
                style={{
                  background: "#000329",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
              />
            </h3>
          </div>
        </div>
      </div>
      <div className='landRight'>
        <img src={Vector} alt='vector' />
      </div>
    </div>
  );
};

export default Land;
