import React from "react";
import { List } from "@react95/core";
import { Awfxcg321303 } from "@react95/icons";
import * as S from "./layoutStyling";

function CV({ closeCV, isMobile }) {
  return (
    <S.layoutMain
      isMobile={isMobile}
      title={"CV.txt"}
      closeModal={closeCV}
      height="100%"
      icon={<Awfxcg321303 variant="32x32_4" />}
      menu={[
        {
          name: "Options",
          list: (
            <List>
              <List.Item onClick={closeCV}>Close</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.layoutMainContent bg="white" boxShadow="in">
        <S.textModal>
          <div className="text-content">
            <h1>Curriculum Vitae</h1>
            <p>
              Mechanical engineer with a Master's degree in Energy Technology.
              Always keen on learning new things. Passionate about science and
              technology, experimenting and solving challenges. I want to keep
              creating sophisticated and beautifully designed apps.
            </p>
            <h2>Work Experience</h2>
            <h3>Frontend Developer - Freelance</h3>
            <h4>Jun. 2022 - presently</h4>
            <p>
              Designed and developed MVPs of websites and mobile apps for a
              client with no prior experience with customer-facing applications.
            </p>
            <p>
              Integrated a payment gateway into a web app for a b2b fintech
              product.
            </p>
            <h3>Co-Founder - Tatacoa Bitcoin</h3>
            <h4>Feb. 2021 - presently</h4>
            <p>
              Created a mobile application using React Native that facilitates
              P2P Bitcoin commerce.
            </p>
            <p>Produced a mobile Bitcoin Lightning Wallet.</p>
            <p>
              Built a dashboard application using Express and React that
              provides store owners a detailed account of Bitcoin transaction
              history.
            </p>
            <h3>Software Engineer - EPAM</h3>
            <h4>Jun 2021 - Dec 2021</h4>
            <p>
              Participated in the construction of a CRM platform for the
              pharmaceutical sector. Built components from mockups and user
              stories and provided input to UI/UX designers.
            </p>
            <h3>UI Engineer - Globant</h3>
            <h4>Feb 2020 - Jun 2021</h4>
            <p>
              Ported an exisiting React Native app for video streaming owned by
              Warner Media to support Roku TV. User interface and business logic
              had to be adapted to offer a uniform experience across all
              platforms and to account for technical limitations.
            </p>
            <p>
              Created visual components from the ground up based on mockups to
              complete a storybook, as part of the efforts to migrate the
              website of National Geographic to Disney's in-house implementation
              of the React library.
            </p>
            <h3>Frontend Developer - Handmadetech</h3>
            <h4>May 2019 - Jun 2020</h4>
            <p>
              Responsible of building a front end for mobile devices for a
              location-based marketing platform. This React Native RESTful app
              make use of Redux for state management.
            </p>
            <p>
              Led a small team on the development of a platform that offers
              beauty services. This React.js responsive web app includes
              features such as user accounts, bookings and card payments.
            </p>
            <p>
              Ensured code follows good practices and meet quality standards
              before being pushed to production
            </p>
            <h3>Co-Founder - Corporación HorMinka</h3>
            <h4>Jan 2016 - Nov 2017</h4>
            <p>
              Started a non-profit organisation to promote science and
              technology as tools for social development in the south of
              Colombia.
            </p>
            <p>
              Developed IoT devices for home automation on both hardware and
              software side.
            </p>
            <p>
              Collaborated in the creation of apps to encourage civic
              engagement.
            </p>
            <p>
              Participated as speaker in conferences for topics such as
              Information Security and Free Software.
            </p>
            <hr />
            <h2>Education</h2>
            <h3>Full-stack web development</h3>
            <h4>Le Wagon Coding Bootcamp, Berlin, 2018</h4>
            <h3>MSc in Energy Technology</h3>
            <h4>
              Lappeenranta University of Technology, Lappeenranta, 2012-2015
            </h4>
            <h3>BSc in Mechanical Engineering</h3>
            <h4>Universidad de América, Bogota, 2005-2010</h4>
            <hr />
            <h2>Languages</h2>
            <ul>
              <li>Spanish (native)</li>
              <li>English (high proficiency)</li>
              <li>German (basic)</li>
            </ul>
          </div>
        </S.textModal>
      </S.layoutMainContent>
    </S.layoutMain>
  );
}

export default CV;
