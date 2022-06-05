import React, { useState } from "react";
import "./modal.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Icon from "react-crypto-icons";
import Icon1 from "../../../assets/eth.png";
import Icon2 from "../../../assets/mco.png";
import Icon3 from "../../../assets/meta.png";
import Icon4 from "../../../assets/steem.png";
import Icon5 from "../../../assets/trx.png";
import Icon6 from "../../../assets/bnb.png";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Modal = ({ showModal, setShowModal }) => {
  const data = [
    {
      icon: Icon1,
      name: "Ethereum",
    },
    {
      icon: Icon6,
      name: "Binance Chain Wallet",
    },
    {
      icon: Icon3,
      name: "Metawerse ETP",
    },
    {
      icon: Icon2,
      name: "Crypto.com",
    },
    {
      icon: Icon4,
      name: "Steem",
    },
    {
      icon: Icon5,
      name: "Tron",
    },
  ];

  return (
    <>
      {showModal && (
        <div className='modal'>
          <div className='modalContainer'>
            <div className='modalBottom'>
              <div className='modalTop'>
                <h2 className='modalH2'>
                  Connect Wallet
                  <CloseOutlinedIcon
                    onClick={() => setShowModal(false)}
                    sx={{ cursor: "pointer" }}
                  />
                </h2>
              </div>
              <List className='modalLists'>
                {data.map((item, index) => (
                  <ListItem key={index} className='listItem'>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: "#ffffff" }}>
                        <Avatar src={item.icon} alt='icon' />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
