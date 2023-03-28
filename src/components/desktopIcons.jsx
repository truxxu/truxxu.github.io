import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import IconBox from "./iconBox";
import IconText from "./iconText";
import "./styles.scss";
import { Awfxcg321303, Desk100, Mspaint, Earth } from "@react95/icons";
import caco from "../caco.png";

function Shortcuts({ openPortfolio, openCV, openSkills, openDoom }) {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle></GlobalStyle>
        <IconBox className="pointer" onClick={() => openCV()}>
          <Awfxcg321303 className="pointer" variant="32x32_4" />
          <IconText className="pointer">CV.txt</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openPortfolio()}>
          <Desk100 className="pointer" variant="32x32_4" />
          <IconText className="pointer">Projects</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openSkills()}>
          <Mspaint className="pointer" variant="32x32_4" />
          <IconText className="pointer">Skills</IconText>
        </IconBox>
        <IconBox className="pointer" onClick={() => openDoom()}>
          <img className="pointer" src={caco} width={32} alt="Doom logo" />
          <IconText className="pointer">Doom</IconText>
        </IconBox>
      </ThemeProvider>
    </div>
  );
}

export default Shortcuts;
