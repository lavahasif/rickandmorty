import { useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import { render } from "@testing-library/react";
import React, { createContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  EPISODE_QUERY_PAGE_CHARACTER,
  EPISODE_QUERY_PAGE,
} from "../Repository/FetchGraph";
import Cards from "./Card";
import "./Content.css";
var ItemContext = createContext({});
function Content(props) {
  const numbers = [1, 2, 3, 4, 5];
  const [pcount, setpcount] = useState(1);
  const [page, setPage] = useState(1);
  const [og, setog] = useState(undefined);
  const { data, loading, error } = useQuery(EPISODE_QUERY_PAGE_CHARACTER, {
    variables: { page },
  });
  const HandleChange = (event, value) => {
    setPage(value);
  };

  let items = "<></>";
  useEffect(() => {
    if (!loading && !error) {
      setpcount(data.episodes.info.pages);
    }
    // return () => {};
  }, [data]);

  if (loading)
    return (
      <Stack alignItems="center" justify="center">
        <CircularProgress />;
      </Stack>
    );

  if (error) return <pre>{error.message}</pre>;

  items = data.episodes.results.map((item) => {
    return (
      <Grid key={item.id + 1000} item xs={6} md={6} lg={4}>
        <ItemContext.Provider value={item}>
          <Cards {...item}>{item}</Cards>
        </ItemContext.Provider>
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
        // height: "100%",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <h1 sx={{ float: "left" }}> Episodes</h1>
        <Grid container spacing={4}>
          {items}
        </Grid>
        <Stack spacing={2} alignItems="center" justify="center">
          <Pagination
            key={"pag"}
            sx={{ marginTop: "48px", MarginBottom: "16px" }}
            count={pcount}
            variant="outlined"
            color="primary"
            // shape="rounded"
            page={page}
            onChange={HandleChange}
          />
        </Stack>
      </Container>
    </Box>
  );
}
export { Content, ItemContext };
