import { Box, Container, Grid } from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Card";
import "./Content.css";
function Content(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  const itmes = [1, 2, 3, 4, 5].map((item) => {
    return (
      <Grid key={item} item xs={6} md={6} lg={4}>
        <Cards keys={item} />
      </Grid>
    );
  });

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
        <h1 sx={{ float: "left" }}> Episodes</h1>
        <Grid container spacing={4}>
          {itmes}
        </Grid>
      </Container>
    </Box>
  );
}
export default Content;