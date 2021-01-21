import React from "react";
import HeaderWrapper from "./headerWrapper";

const Header: React.SFC = () => {
  return (
    <HeaderWrapper className="flex">
      <header>
        <div className="container flex">
          <div className="brand">
            HAGARASTUFF. <span>UX DESIGN</span>
          </div>
          <nav className="menu">
            <ul>
              <li className="current">
                <a href="http://localhost:8000/">Projects</a>
              </li>
              <li className="">
                <a href="http://localhost:8000/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="header-text">
          <h2>Oh, Hello!</h2>
          <p>
            My name is Hagara, a product designer focused on UX & UI, Visual
            Design and Image making.
          </p>
        </div>
      </main>
    </HeaderWrapper>
  );
};

export default Header;
