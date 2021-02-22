import React, { useState, useEffect } from "react";
import AboutWrapper from "./aboutWrapper";
import HeaderTag from "../header/headerTag";

import photo from "resources/images/header/photo.png";

const About: React.SFC = () => {
  const [data, setData] = useState(null);
  const [origin, setOrigin] = useState(null);

  const initData = {
    phone: "058-498-6862",
    email: "adveronika69@gmail.com",
    linkdin: "https://www.linkedin.com/in/veronika-adonieva-a263a166",
  };

  useEffect(() => {
    fetch(`/nika/userdata`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
        setData(initData);
      });
    setOrigin(window.location.origin);
  }, []);

  return (
    <AboutWrapper>
      <HeaderTag />

      <div className="flex">
        <div className="flex-composition">
          <div className="designer-composition">
            <div className="hello">
              Hello<span className="x-clam">!</span>
            </div>
          </div>

          <h3>Hey! My name is Veronika, I’m UI and UX designer.</h3>

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
        </div>
        <div className="photo-wrapper">
          <img src={photo} alt="facePhoto" />
        </div>
      </div>
      <div className="contacts">
        <a className="cvfile" href={`/nika/cvfile`} download>
          Download My CV
        </a>
        <a href={data && data.linkdin}>
          <i className="fab fa-linkedin"></i>
        </a>
        <div className="phone">
          <i className="fas fa-phone-alt"></i>
          <span>{data && data.phone}</span>
        </div>
        <div className="mail">
          <i className="fas fa-envelope"></i>
          <span>{data && data.email}</span>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
