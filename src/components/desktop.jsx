import React, { useState, useCallback } from "react";
import {
  GlobalStyle,
  ThemeProvider,
  List,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";
import Janne_pixelated from "../janne_pixelated.png";
import socialMedia from "./socialMedia";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";
import { Progman37, Mspaint, User, Progman34, Mail } from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";

function Desktop() {
  /* Mobile detection */
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const [items] = useState([]);

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

  /* Portfolio Shortcut */
  const closePortfolio = () => {
    togglePortfolio(false);
  };

  const openPortfolio = () => {
    togglePortfolio(true);
  };
  const [explorerOpened, togglePortfolio] = useState(false);

  /* CV Shortcut */

  const closeCV = () => {
    toggleCV(false);
  };

  const openCV = () => {
    toggleCV(true);
  };

  const [cvOpened, toggleCV] = useState(false);

  return (
    <ThemeProvider theme="win95">
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon={<Progman37 variant="32x32_4" />}
          title={"About.txt"}
          closeModal={handleCloseAboutModal}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="out">
            <S.textModal>
              <div class="text-content">
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
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showSkillsModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          closeModal={handleCloseSkillsModal}
          icon={<Mspaint variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <div class="text-content">
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
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showPhotoModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"janne_compressed_for_web.jpeg"}
          closeModal={handleClosePhotoModal}
          icon={<User variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            boxShadow="none"
            style={{
              margin: "auto",
            }}
          >
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              class="full-width-image"
            ></img>
          </Frame>
          <div class="image-text">
            <p>janne_compressed_for_web.jpeg</p>
          </div>
        </S.layoutMain>
      )}
      <TaskBar
        list={
          <List>
            <List.Item
              as="a"
              href="mailto:janne.ilkka@gmail.com"
              icon={<Mail variant="32x32_4" />}
              target="_blank"
            >
              Email me
            </List.Item>
            <List.Divider />
            <List.Item icon={<Progman34 variant="32x32_4" />}>
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    icon={icon}
                    key={name}
                    rel="noopener noreferrer"
                    target="_blank"
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
              Janne
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
      <React.Fragment>
        <Shortcuts openPortfolio={openPortfolio} openCV={openCV} />
        {explorerOpened && (
          <Portfolio
            items={items}
            closePortfolio={closePortfolio}
            isMobile={isMobile}
          />
        )}
        {cvOpened && <CV items={items} closeCV={closeCV} isMobile={isMobile} />}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Desktop;
