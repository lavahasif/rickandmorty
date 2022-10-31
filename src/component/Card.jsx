import { Box, Card, Container, Typography } from "@mui/material";
import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./Card.css";
import { ItemContext } from "./Content";

function Cards(props) {
  //   console.log(props.name);
  const context = useContext(ItemContext);
  //   console.log(context);
  return (
    <Link
      to={`/details/${props.id}`}
      state={{ episode: `${props.name}`, ...props }}
    >
      <Card key={props.id + 2000} className="card" variant="outlined">
        <img
          alt=""
          src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYZ6FkILqFYOOhUZHW834CFlbcom5nSElwprt8gKFamCHu-LS3PLklVYxxqzhITiz8hV4mHiy_kjyDUAaY9KwylSo1E7eGDAiwtQOz7nQ3aAkqOgWaUFGrM6.jpg?r=221"
        ></img>
        <Typography variant="body1" color="initial">
          {props.name}
        </Typography>
      </Card>
    </Link>
  );
}
export default Cards;
