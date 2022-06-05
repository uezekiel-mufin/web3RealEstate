import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import "./nav.css";
import logo from "../../../assets/bg-01 3.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ setShowModal }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar sx={{ background: "#070632" }}>
        <Toolbar className='toolbar'>
          <img src={logo} alt='lots of land' />
          <div onClick={() => setOpen(!open)} className='menuIcons'>
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>
          <ul className={open ? "noLinks" : "links"}>
            <li onClick={() => setOpen(!open)}>About</li>
            <li onClick={() => setOpen(!open)}>Roadmap</li>
            <li onClick={() => setOpen(!open)}>Gameplay</li>
            <li onClick={() => setOpen(!open)}>Team</li>
            <Button
              onClick={() => {
                setShowModal(true);
                setOpen(!open);
              }}
            >
              Connect Wallet
            </Button>
          </ul>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
