import React from "react";
import "./Header.scss";

import { Link, Navigate } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import Message from "../../assets/message.png";
import Notification from "../../assets/notification.png";
import { MAIN_ROUTE } from "../../router/constants";
import Avatar from "../Avatar/Avatar";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

const Header = () => {
  console.log("render");
  const Click = () => {
    return <Navigate to={MAIN_ROUTE} />;
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to={MAIN_ROUTE}>
          <img src={Logo} alt="Logo" width={28} />
        </Link>
      </div>
      <div className="header__search">
        <MyInput placeholder={"Поиск"} />
      </div>
      <div className="header-btn">
        <div className="header-btn__notification">
          <MyButton>
            <img src={Notification} alt="Notification" width={28} />
          </MyButton>
        </div>
        <div className="header-btn__message">
          <MyButton>
            <img src={Message} alt="Message" width={28} />
          </MyButton>
        </div>
        <div className="header-btn__profile">
          <MyButton>
            <Avatar letter={"A"} width={28} />
          </MyButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
