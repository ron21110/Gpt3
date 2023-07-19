import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Power,
  Header,
  WhatGPT3,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";
function App(props) {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Power />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
