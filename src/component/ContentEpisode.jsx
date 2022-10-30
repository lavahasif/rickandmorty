import { Box, Container, Grid } from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Card";
import "./Content.css";
function ContentEpisode(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <Box
      key={"content"}
      sx={{
        flexGrow: props.flexGrow,
        position: "absolute",
        backgroundColor: "#181818",
        top: "46%",
        width: "100%",
        height: "200vh",
      }}
    >
      <Container maxWidth="lg">
        <h1 style={{ position: "absolute", top: "3%", left: "3%" }}>
          {props.episode}
        </h1>
        <Grid container spacing={4}></Grid>
      </Container>
    </Box>
  );
}
export default ContentEpisode;
