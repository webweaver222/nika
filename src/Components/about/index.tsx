import React from "react";
import AboutWrapper from "./aboutWrapper";

import photo from "resources/images/header/photo.png";

const About: React.SFC = () => {
  return (
    <AboutWrapper>
      <header>
        <div className="logo-text">Veronika adonieva</div>
        <nav>
          <span>home</span>
          <span>about</span>
        </nav>
      </header>

      <div className="flex">
        <div className="flex-composition">
          <div className="designer-composition">
            <div className="hello">
              Hello<span className="x-clam">!</span>
            </div>
          </div>

          <p className="description">
            After graduating Architecture faculty, I worked on my specialty for
            a year, but then I realized that digital design attracts me more.
            Since then I have started to do design, using my old knowledge and
            getting the new ones. I’ve completed several courses in graphic
            design, UI and UX, and continue my self developing working as a web
            designer for an international company in Tel Aviv.
          </p>

          <p className="description" style={{ marginTop: "45px" }}>
            I came to design from architecture, and this fact had strong
            influence on my thinking. Before creating something new, I allways
            think about user friendliness to build the most comfortable and
            clear user experiance. Besides my current work, in my free time I
            also have my own freelance projects.
          </p>

          <p className="description" style={{ marginTop: "45px" }}>
            For now I am looking for new opportunities for my professional
            growth, which will also help my partners achieve their business
            goals.
          </p>

          <div className="contacts">
            <button className="cvfile">Download My CV</button>
            <div className="linkdin"></div>
          </div>
        </div>
        <div className="photo-wrapper">
          <img src={photo} alt="facePhoto" />
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
