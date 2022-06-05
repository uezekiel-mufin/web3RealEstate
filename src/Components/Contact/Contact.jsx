import {
  Button,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./contact.css";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { StyledEngineProvider, styled } from "@mui/material/styles";

const Contact = () => {
  const data = [
    {
      icon: <FaTelegram style={{ color: "#29B6F6" }} />,
      name: "Telegram",
    },
    {
      icon: <FaTwitter style={{ background: "#03A9F4" }} />,
      name: "Twitter",
    },
    {
      icon: <FaDiscord style={{ background: "#8C9EFF", color: "#ffffff" }} />,
      name: "Discord",
    },
    {
      icon: <MdEmail style={{ background: "#1E88E5", color: "#ffffff" }} />,
      name: "Email",
    },
    {
      icon: <FaFacebookF style={{ background: "#395185", color: "#ffffff" }} />,
      name: "Facebook",
    },
    {
      icon: <FaMediumM style={{ background: "#1F1F1F", color: "#ffffff" }} />,
      name: "Medium",
    },
    {
      icon: <FaReddit style={{ background: "#FF4500", color: "#ffffff" }} />,
      name: "Reddit",
    },
    {
      icon: <FaYoutube style={{ background: "#FF0000", color: "#ffffff" }} />,
      name: "Youtube",
    },
  ];
  const [select, setSelect] = useState("Partnership");
  const selectData = ["Partnership", "Investment", "Purchase", "enquiry"];
  const StyledTextField = styled(TextField)({
    "& label": {
      color: "white",
    },
    "& input  ": {
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "bold",
    },

    "& hover label": {
      fontWeight: 700,
    },

    "& .MuiInputBase-inputMultiline": {
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "bold",
    },
  });
  return (
    <div className='contact'>
      <div className='media'>
        <div className='mediaHead'>
          <h1>Contact us</h1>
          <h5>
            You can reach us directly by sending us a mail or via any of our
            social platforms.
          </h5>
        </div>
        <div className='mediaBottom'>
          <List className='lists'>
            {data.map((item, index) => (
              <ListItem key={index} sx={{ borderRadius: "1rem" }}>
                <ListItemButton>
                  <ListItemIcon style={{ fontSize: "1.5rem" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className='form'>
        <div className='form'>
          <form>
            <InputLabel style={{ color: "#ffffff" }} htmlFor='type'>
              Type
            </InputLabel>
            <StyledTextField
              select
              onChange={(e) => setSelect(e.target.value)}
              id='type'
              value={select}
              style={{
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.1)",
                marginBottom: "2rem",
              }}
            >
              {selectData.map((data, index) => (
                <MenuItem
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={index}
                  value={data}
                >
                  {data}
                </MenuItem>
              ))}
            </StyledTextField>
            <InputLabel style={{ color: "#ffffff" }} htmlFor='fullname'>
              FullName
            </InputLabel>
            <StyledTextField
              id='fullname'
              placeholder='john smith'
              style={{
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.03)",
                marginBottom: "2rem",
                color: "#ffffff",
              }}
            />
            <InputLabel style={{ color: "#ffffff" }} htmlFor='email'>
              Contact Email
            </InputLabel>
            <StyledTextField
              id='email'
              placeholder='example@email.com'
              style={{
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.03)",
                marginBottom: "2rem",
                color: "#ffffff",
              }}
            />
            <InputLabel style={{ color: "#ffffff" }} htmlFor='message'>
              Message
            </InputLabel>
            <StyledTextField
              multiline
              rows={5}
              id='message'
              placeholder='type your message.....'
              style={{
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.03)",
                marginBottom: "2rem",
                color: "#ffffff",
              }}
            />
            <Button variant='contained'>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
