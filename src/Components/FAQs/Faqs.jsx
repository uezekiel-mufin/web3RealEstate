import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "./faqs.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Faqs = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className='faqs'>
      <h2 className='faqs__h2'>FREQUENTLY ASKED QUESTIONS</h2>
      <div className='faqsDetails'>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open1 ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>

          <IconButton onClick={() => setOpen1(!open1)}>
            {open1 ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open2 ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>

          <IconButton onClick={() => setOpen2(!open2)}>
            {open2 ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open3 ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>

          <IconButton onClick={() => setOpen3(!open3)}>
            {open3 ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open4 ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>

          <IconButton onClick={() => setOpen4(!open4)}>
            {open4 ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
        <div className='faqs__details'>
          <div className='text'>
            <h4>
              Cum sociis natoque penatibus et magnis dis parturient montes
            </h4>
            <h5 className={open5 ? "open" : "close"}>
              Natoque penatibus et magnis dis parturient montes. Nullam id dolor
              id nibh ultricies vehicula ut id elit donec ullamcorper nulla non
              metus auctor fringilla.
            </h5>
          </div>

          <IconButton onClick={() => setOpen5(!open5)}>
            {open5 ? (
              <KeyboardArrowUpOutlinedIcon style={{ color: "#ffffff" }} />
            ) : (
              <KeyboardArrowDownOutlinedIcon style={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
