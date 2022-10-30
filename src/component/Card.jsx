import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./Card.css";
function Cards(props) {
  return (
    <Link
      to={`/details/${props.keys}`}
      state={{ episode: `Episode${props.keys}` }}
    >
      <Card key={props.keys} className="card" variant="outlined">
        <img
          alt=""
          src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYZ6FkILqFYOOhUZHW834CFlbcom5nSElwprt8gKFamCHu-LS3PLklVYxxqzhITiz8hV4mHiy_kjyDUAaY9KwylSo1E7eGDAiwtQOz7nQ3aAkqOgWaUFGrM6.jpg?r=221"
        ></img>
        <Typography variant="body1" color="initial">
          Episode {props.keys}
        </Typography>
      </Card>
    </Link>
  );
}
export default Cards;
