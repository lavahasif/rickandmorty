import { Box } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Hero.css";
export default function Hero(props) {
  return (
    <Box sx={{ flexGrow: props.flexGrow }}>
      <div className="hero" style={{}}>
        <div className="layer"></div>
      </div>
      <h1 className="title" sx={{ float: "left" }}>
        {" "}
        Rick and Morty
      </h1>
      {/* <div className="info-container">
        <div className="logo-container logo-other">
          <img
            height={"50%"}
            width={"50%"}
            src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66"
            alt=""
          />
        </div> */}
      {/* </div> */}
    </Box>
  );
}
