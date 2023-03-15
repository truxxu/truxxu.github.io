import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from "./iconBox";
import IconText from "./iconText";
import "./styles.scss";
import { Awfxcg321303, Explorer103, CdMusic } from "@react95/icons";

function Shortcuts({ openPortfolio, openCV, openTunes }) {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle></GlobalStyle>
        <IconBox className="pointer" onClick={() => openPortfolio()}>
          <Explorer103 className="pointer" variant="32x32_4" />
          <IconText className="pointer">Portfolio.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openCV()}>
          <Awfxcg321303 className="pointer" variant="32x32_4" />
          <IconText className="pointer">CV.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openTunes()}>
          <CdMusic className="pointer" variant="32x32_4" />
          <IconText className="pointer">Tunes</IconText>
        </IconBox>
      </ThemeProvider>
    </div>
  );
}

export default Shortcuts;
