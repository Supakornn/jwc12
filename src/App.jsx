import React from "react";
import styled from "styled-components";
import Navbar from "./layouts/Navbar";
import About from "./layouts/About";
import Review from "./layouts/Review";
import Contact from "./layouts/Contact";
import Header from "./layouts/Header";

const AppContainer = styled.div`
  background-color: #612378;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Header />
      <About />
      <Review />
      <Contact />
    </AppContainer>
  );
};

export default App;
