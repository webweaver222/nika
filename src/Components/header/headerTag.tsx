import React from "react";
import { Link } from "react-router-dom";

const HeaderTag: React.SFC = () => {
  return (
    <header>
      <div className="logo-text">Veronika adonieva</div>
      <nav>
        <span>
          {" "}
          <Link to="/">home</Link>
        </span>
        <span>
          <Link to="/about">about</Link>
        </span>
      </nav>
    </header>
  );
};

export default HeaderTag;
