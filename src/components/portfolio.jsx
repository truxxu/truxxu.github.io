import React from "react";
import { List } from "@react95/core";
import { Desk100 } from "@react95/icons";
import * as S from "./layoutStyling";

function Portfolio({ closePortfolio, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"Projects"}
      closeModal={closePortfolio}
      height="100%"
      icon={<Desk100 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closePortfolio}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <div class="text-content">
            <h1>Projects</h1>
            <p>
              This is a brief overlook to some of the projects that I have been
              working on recently. Contact me for more details.
            </p>
            <hr />
            <h2>Tatacoa Wallet</h2>
            <p>
              Custodial Bitcoin Lightning wallet app
              <h3>Tech Stack</h3>
              React Native, Fastlane, i18next, React Hook Form, SWR
            </p>
            <div class="links-group">
              <a
                href="https://play.google.com/store/apps/details?id=com.tatacoabitcoin.wallet&gl=US"
                target={"_blank"}
                rel="noreferrer"
              >
                Link
              </a>
              <a
                href="https://github.com/TatacoaBitcoin/TatacoaWallet"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </div>

            <hr />
            <h2>Tatacoa BTM</h2>
            <p>
              P2P Bitcoin Lightning commerce
              <h3>Tech Stack</h3>
              React Native, i18next, React Hook Form, SWR
            </p>
            <div class="links-group">
              <a
                href="https://play.google.com/store/apps/details/Tatacoa_BTM?id=com.btm&gl=US"
                target={"_blank"}
                rel="noreferrer"
              >
                Link
              </a>
              <a
                href="https://github.com/TatacoaBitcoin/btm-app-v2"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.youtube.com/watch?v=pxHFuAfmmcE"
                target={"_blank"}
                rel="noreferrer"
              >
                Youtube
              </a>
            </div>
            <hr />
            <h2>Mobile Crypto Wallet</h2>
            <p>
              Cryptocurrency wallet mobile app. Send and receive BEP-20 tokens.
              <h3>Tech Stack</h3>
              React Native, i18next, React Hook Form, SWR
            </p>
            <div class="links-group">
              <a
                href="https://github.com/truxxu/mobile-wallet"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <hr />
            <h2>Cryptocurrency Platform</h2>
            <p>
              Verified users can receive tokens, top up debit cards and transfer
              to external wallets.
              <h3>Tech Stack</h3>
              React, Bootstrap, SWR
            </p>
            <hr />
            <h2>Tatacoa Dashboard</h2>
            <p>
              This dashboard allow Tatacoa API users to keep track of the
              transactions.
              <h3>Tech Stack</h3>
              React, Express, Bootstrap, SWR
            </p>
            <div class="links-group">
              <a
                href="https://www.dashboard.tatacoabitcoin.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Link
              </a>
              <a
                href="https://github.com/TatacoaBitcoin/tatacoa-dashboard"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <hr />
            <h2>Tatacoa API Docs</h2>
            <p>
              Documentation for Tatacoa API
              <h3>Tech Stack</h3>
              Next, Bootstrap
            </p>
            <div class="links-group">
              <a
                href="https://github.com/TatacoaBitcoin/api-docs-next"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <hr />
            <h2>Tatacoa Wiki</h2>
            <p>
              Tatacoa API documentation and various guides
              <h3>Tech Stack</h3>
              Gatsby
            </p>
            <div class="links-group">
              <a
                href="https://tatacoabitcoin.github.io/wiki/"
                target={"_blank"}
                rel="noreferrer"
              >
                Link
              </a>
              <a
                href="https://github.com/TatacoaBitcoin/wiki"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <hr />
          </div>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default Portfolio;
