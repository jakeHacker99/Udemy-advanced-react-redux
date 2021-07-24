import React from "react";
import "./style.scss";

import Logo from "../../assets/unikoin-gold.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="btc" style={{ width: "100px" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
