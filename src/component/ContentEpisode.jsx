import {
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import CharacterCard from "./CharacterCard";
import "./Content.css";
function ContentEpisode(props) {
  const styleRow = { color: "white" };
  const mprop = props.episode;
  const table = (
    <div style={{ color: "white" }}>
      {/* <h2>Episode: {}</h2>
  <h3>123</h3>
  <h4>123</h4>
  <h5>123</h5> */}

      <TableContainer sx={{ margin: "16px" }}>
        <Table sx={{ color: "white" }}>
          <TableBody>
            <TableRow sx={styleRow}>
              <TableCell sx={styleRow}>Episode</TableCell>
              <TableCell sx={styleRow}>{mprop.episode}</TableCell>
            </TableRow>
            <TableRow sx={styleRow}>
              <TableCell sx={styleRow}>Release</TableCell>
              <TableCell sx={styleRow}>{mprop.air_date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  const items = props.episode.characters.map((item, index) => {
    // item["id"] = index;
    const data = { ...item, id: index };
    return (
      <Grid key={index + 30000} item xs={6} md={4} lg={3}>
        {/* <ItemContext.Provider value={item}> */}
        <CharacterCard {...data}>{item}</CharacterCard>
        {/* </ItemContext.Provider> */}
      </Grid>
    );
  });

  return (
    <Box
      name="Content"
      key={"content"}
      sx={{
        flexGrow: props.flexGrow,
        position: "absolute",
        backgroundColor: "#181818",
        top: "46%",
        width: "100%",
        // minHeight: "100vh",
        // maxHeight: "250vh",
      }}
    >
      <Container maxWidth="lg">
        <h1 style={{ position: "absolute", top: "1%", left: "3%" }}>
          {mprop.name}
        </h1>
        <Grid
          container
          spacing={2}
          sx={{
            top: "125px",
            left: "3%",
            position: "relative",
          }}
        >
          <Grid item xs={10} md={5} lg={5}>
            <img
              width={"100%"}
              height={"100%"}
              alt="Main Image"
              src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYZ6FkILqFYOOhUZHW834CFlbcom5nSElwprt8gKFamCHu-LS3PLklVYxxqzhITiz8hV4mHiy_kjyDUAaY9KwylSo1E7eGDAiwtQOz7nQ3aAkqOgWaUFGrM6.jpg?r=221"
            ></img>
          </Grid>
          <Grid
            // alignContent={"center"}
            // justifyContent={"center"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              // alignItems: "center",
            }}
            item
            xs={10}
            md={5}
            lg={5}
          >
            {table}
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "relative",
            top: "150px",
            // left: "3%",
            display: "block",
          }}
        >
          <h3>Character</h3>
        </Box>

        <Grid
          container
          spacing={1}
          sx={{ position: "relative", top: "150px", left: "1%" }}
        >
          {items}
        </Grid>
      </Container>
    </Box>
  );
}
export default ContentEpisode;
