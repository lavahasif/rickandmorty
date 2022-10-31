import { Box, Card, Container, Typography } from "@mui/material";
import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./Card.css";
import { ItemContext } from "./Content";

function CharacterCard(props) {
  //   console.log(props.name);
  // console.log(props);
  const context = useContext(ItemContext);
  //   console.log(context);
  return (
    // <Link
    //   to={`/details/${props.id}`}
    //   state={{ episode: `${props.name}`, ...props }}
    // >
    <Card key={props.id + 6666} className="card" variant="outlined">
      <img alt="" src={props.image}></img>
      <Typography variant="body1" color="initial">
        {props.name}
      </Typography>
    </Card>
    // </Link>
  );
}
export default CharacterCard;
