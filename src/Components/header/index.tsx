import React, { useEffect, useRef, useState } from "react";
import HeaderWrapper from "./headerWrapper";

import banner from "resources/images/header/uiuxBanner.png";

const Header: React.SFC = () => {
  const header = useRef(null);

  const [parallaxOffset, setParallax] = useState(0);

  const handleScroll = (event: any) => {
    if (event.target.scrollTop > event.target.offsetHeight) return;
    setParallax(event.target.scrollTop * 0.4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <HeaderWrapper ref={header}>
      <header>
        <div className="logo-text">Veronika adonieva</div>
        <nav>
          <span>home</span>
          <span>about</span>
        </nav>
      </header>

      <div className="flex-composition">
        <div className="header-text">
          <span className="welcome">Hey. my name is Veronika</span>
          <div className="designer-composition">
            <div className="uiux">
              UI
              <span>/</span>
              UX
            </div>
            <div className="designer">
              Des<span className="i-letter">i</span>
              <span className="g-letter">g</span>ner
            </div>
          </div>
          <p className="description">
            I’m a person with a strong passion to the simple and clear things.
            Allways trying to add to my surrounding area a little bit harmony.
          </p>
          <p className="description description-long">
            My dream is to create quality digital things, which would help
            another people to improve their lives
          </p>
        </div>
      </div>
      <div
        className="vertical-banner"
        style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px))` }}
      >
        <img src={banner} alt="" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
