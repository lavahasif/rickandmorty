import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Content from "./component/Content";
import Footer from "./component/Footer";
import { Box } from "@mui/system";
import MainPage from "./Page/Main";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Page/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        {/* navigate to each episode page click */}
        <Route path="/details/:episode" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
