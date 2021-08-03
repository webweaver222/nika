import React from "react";
import HeaderTag from "./headerTag";
import HeaderWrapper from "./headerWrapper";
import HeaderContainer from "../hoc/headerContainer";

import banner from "resources/images/header/uiuxBanner.png";
import shevrone from "resources/svg/chevron-arrow-down.svg";

const Header: React.SFC = ({
  header,
  parallaxOffset,
  onShevroneClick,
}: any) => (
  <HeaderWrapper ref={header}>
    <div className="container">
      <HeaderTag />

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
            I’m a person with a strong passion to simple and clear things.
            Always trying to add a little bit of harmony to my surrounding area
          </p>
          <p className="description description-long">
            My dream is to create quality digital things, which would help other
            people to improve their lives
          </p>
        </div>
      </div>
      <div
        className="vertical-banner"
        style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px))` }}
      >
        <img src={banner} alt="" />
      </div>
      <div className="shevrone-block">
        <img src={shevrone} alt="shevrone" onClick={onShevroneClick} />
      </div>
    </div>
  </HeaderWrapper>
);

export default HeaderContainer(Header);
