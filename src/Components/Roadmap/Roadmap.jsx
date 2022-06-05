import React from "react";
import "./roadmap.css";
import Logo from "../../assets/A futuristic and illogical factory thing that processes purple goo.png";

const Roadmap = () => {
  const data1 = [
    {
      qrt: "Q1 2021",
      detail1: "Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      details2: "Launch of ambassador program",
    },
    {
      qrt: "Q2 2021",
      detail1: "Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      details2: "Launch of ambassador program",
    },
  ];

  const data2 = [
    {
      qrt: "Q3 2021",
      detail1: "Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      details2: "Launch of ambassador program",
    },
    {
      qrt: "Q4 2021",
      detail1: "Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      details2: "Launch of ambassador program",
    },
  ];
  return (
    <div className='roadmap'>
      <h2>Our RoadMap</h2>
      <div className='roadmapBody'>
        <div className='road'>
          {data1.map((item, index) => (
            <div className='item' key={index}>
              <h1 className='item__h1'>{item.qrt}</h1>
              <ul>
                <li>{item.detail1}</li>
                <li>{item.details2}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='road'>
          {data2.map((item, index) => (
            <div className='item' key={index}>
              <h1 className='item__h1'>{item.qrt}</h1>
              <ul>
                <li>{item.detail1}</li>
                <li>{item.details2}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
