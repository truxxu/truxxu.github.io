import React from "react";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/win95.css";
import Page from "./components/mainPage";
import Desktop from "./components/desktop";

const Home = () => {
  return (
    <Page>
      <Desktop></Desktop>
    </Page>
  );
};
export default Home;
