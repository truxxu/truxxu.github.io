import React, { useState, useCallback, useMemo } from "react";
import { List, Frame, ProgressBar, TaskBar, TitleBar } from "@react95/core";
import pixel from "../pixel.png";
import socialMedia from "./socialMedia";
import Shortcuts from "./desktopIcons";
import { LayoutMain, LayoutMainContent, TextModal } from "./layoutStyling";
import "./styles.scss";
import { Progman37, Mspaint, User, Progman34, Mail } from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

const contentStyle = { margin: 0, width: "100%" };
const frameStyle = { margin: "auto" };

function Desktop() {
  /* About Modal */
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  /* Skills Modal */
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const handleOpenSkillsModal = useCallback(() => {
    setShowSkillsModal(true);
  }, []);
  const handleCloseSkillsModal = useCallback(() => {
    setShowSkillsModal(false);
  }, []);

  /* Photo Modal */
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  /* Portfolio Modal */
  const [explorerOpened, togglePortfolio] = useState(false);
  const openPortfolio = useCallback(() => {
    togglePortfolio(true);
  }, []);
  const closePortfolio = useCallback(() => {
    togglePortfolio(false);
  }, []);

  /* CV Modal */
  const [cvOpened, toggleCV] = useState(false);
  const openCV = useCallback(() => {
    toggleCV(true);
  }, []);
  const closeCV = useCallback(() => {
    toggleCV(false);
  }, []);

  const aboutMenu = useMemo(
    () => [
      {
        name: "Options",
        list: (
          <List>
            <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
          </List>
        ),
      },
    ],
    [handleCloseAboutModal],
  );

  const skillsMenu = useMemo(
    () => [
      {
        name: "Options",
        list: (
          <List>
            <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
          </List>
        ),
      },
    ],
    [handleCloseSkillsModal],
  );

  const photoMenu = useMemo(
    () => [
      {
        name: "Options",
        list: (
          <List>
            <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
          </List>
        ),
      },
    ],
    [handleClosePhotoModal],
  );

  return (
    <>
      {showAboutModal && (
        <LayoutMain
          isMobile={isMobile}
          icon={<Progman37 variant="32x32_4" />}
          title={"About.txt"}
          titleBarOptions={<TitleBar.Close onClick={handleCloseAboutModal} />}
          menu={aboutMenu}
        >
          <LayoutMainContent bg="white" boxShadow="out">
            <TextModal>
              <div className="text-content">
                <h1>Hola! 👋</h1>
                <p>
                  I am Daniel, a mechanical engineer turned into software
                  developer. Over the last few years I have been working as a
                  Front End Developer for large companies, as a freelancer and
                  also in my own startup,{" "}
                  <a href="https://www.tatacoabitcoin.com/">Tatacoa Bitcoin</a>.
                  I have experience building web and mobile applications using
                  technologies such as React and React Native.
                </p>
                <p>
                  Some of my interests are Bitcoin, Web3, minimalism, low tech,
                  analogue photography, thinkering with electronics and hiking.
                </p>
                <p>
                  This app has been built with Create React App and{" "}
                  <a href="https://github.com/React95/React95">React95</a>, an
                  open-source Windows95 component library for React. Inspired by
                  the amazing works of{" "}
                  <a href="https://janneilkka.com/">Janne Koivisto</a> and{" "}
                  <a href="https://insafkhamzin.com/">Insaf Khamzin</a>.
                </p>
              </div>
            </TextModal>
          </LayoutMainContent>
        </LayoutMain>
      )}
      {showSkillsModal && (
        <LayoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          titleBarOptions={<TitleBar.Close onClick={handleCloseSkillsModal} />}
          icon={<Mspaint variant="32x32_4" />}
          menu={skillsMenu}
        >
          <LayoutMainContent bg="white" boxShadow="in" style={contentStyle}>
            <TextModal>
              <div className="text-content">
                <h1>Technical Skills</h1>
                <p>
                  Next is a display of my main technical skills. I am mostly a
                  visual lerner, some of these skills I have gathered watching
                  other people doing it.
                </p>
                <h3>React</h3>
                <ProgressBar width={250} percent={85} />
                <h3>React Native</h3>
                <ProgressBar width={250} percent={85} />
                <h3>Storybook(JS)</h3>
                <ProgressBar width={250} percent={75} />
                <h3>HTML, CSS, SASS</h3>
                <ProgressBar width={250} percent={75} />
                <h3>Git</h3>
                <ProgressBar width={250} percent={60} />
                <h3>Next</h3>
                <ProgressBar width={250} percent={50} />
                <h3>Express</h3>
                <ProgressBar width={250} percent={30} />
                <h3>Firebase</h3>
                <ProgressBar width={250} percent={30} />
                <h3>Raspberry Pi & Arduino</h3>
                <ProgressBar width={250} percent={30} />
              </div>
            </TextModal>
          </LayoutMainContent>
        </LayoutMain>
      )}
      {showPhotoModal && (
        <LayoutMain
          isMobile={isMobile}
          title={"Daniel_Trujillo.jpeg"}
          titleBarOptions={<TitleBar.Close onClick={handleClosePhotoModal} />}
          icon={<User variant="32x32_4" />}
          menu={photoMenu}
        >
          <Frame boxShadow="none" style={frameStyle}>
            <img
              src={pixel}
              aria-hidden
              alt="Daniel"
              className="full-width-image"
            ></img>
          </Frame>
          <div className="image-text">
            <p>Daniel_Trujillo.jpeg</p>
          </div>
        </LayoutMain>
      )}
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Mail variant="32x32_4" />}
              onClick={() =>
                window.open("mailto:danielfetrujillo@gmail.com", "_blank")
              }
            >
              Email me
            </List.Item>
            <List.Divider />
            <List.Item icon={<Progman34 variant="32x32_4" />}>
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    icon={icon}
                    key={name}
                    onClick={() =>
                      window.open(url, "_blank", "noopener,noreferrer")
                    }
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
            >
              Daniel
            </List.Item>
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
            >
              Skills
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Progman37 variant="32x32_4" />}
              onClick={handleOpenAboutModal}
            >
              About
            </List.Item>
          </List>
        }
      />
      <Shortcuts
        openPortfolio={openPortfolio}
        openCV={openCV}
        openSkills={handleOpenSkillsModal}
      />
      {explorerOpened && (
        <Portfolio closePortfolio={closePortfolio} isMobile={isMobile} />
      )}
      {cvOpened && <CV closeCV={closeCV} isMobile={isMobile} />}
    </>
  );
}

export default Desktop;
