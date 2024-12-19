import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import PcTop from "./pages/component/pcTop";
import H5Top from "./pages/component/h5Top";

function App() {
  return (
    <main className="App">
      <PcTop />
      <H5Top />
      <Outlet />
    </main>
  );
}

export default App;
