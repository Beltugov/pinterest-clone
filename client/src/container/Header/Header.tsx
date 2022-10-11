import React, { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import { MAIN_ROUTE } from "../../router/constants";
import MyInput from "../../components/MyInput/MyInput";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to={MAIN_ROUTE}>
          <img src={Logo} alt="Logo" width={28} />
        </Link>
      </div>
      <div className="header__search">
        <MyInput
          placeholder={"Поиск"}
          value={searchValue}
          change={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="header-btn">
        <div className="header-btn__profile">
          {/*<MyButton>*/}
          {/*  <Avatar letter={"A"} width={28} />*/}
          {/*</MyButton>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
