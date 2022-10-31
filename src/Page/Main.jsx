import { Box } from "@mui/material";
import { Content } from "../component/Content";

import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";

function MainPage() {
  return (
    <div className="App">
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <Hero flexGrow="5" />

        <Content flexGrow="10" />
        <Footer flexGrow="4" />
      </Box>
    </div>
  );
}
export default MainPage;
