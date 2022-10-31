import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import ContentEpisode from "../component/ContentEpisode";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";

function DetailPage(props) {
  var location = useLocation();
  const episode = location.state;
  return (
    <div className="App">
      <Header />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <Hero flexGrow="5" />

        <ContentEpisode episode={episode} flexGrow="1" />
        <Footer sx={{ position: "fixed", bottom: "0px" }} flexGrow="4" />
      </Box>
    </div>
  );
}
export default DetailPage;
