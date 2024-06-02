import React, {useState} from "react";
import "./Header.scss";

import {Link} from "react-router-dom";

import Logo from "../../assets/Logo.png";
import search from "../../assets/search.svg";
import close from "../../assets/close.svg";

import {MAIN_ROUTE, SAVED_PINS_ROUTE} from "../../router/constants";
import MyButton from "../../components/MyButton/MyButton";
import Avatar from "../../components/Avatar/Avatar";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const Header = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const user = useTypeSelector(({userReducer}) => userReducer.user)

    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__logo-link" to={MAIN_ROUTE}>
                    <img src={Logo} alt="Logo" width={24}/>
                </Link>
            </div>
            <label className="header-search">
                <img
                    className="header-search__img"
                    src={search}
                    alt="search"
                    width={24}
                />
                <input
                    className="header-search__input"
                    placeholder={"Поиск"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <MyButton
                    className={"round-btn header-search__close-btn grey"}
                    onClick={() => setSearchValue("")}
                >
                    <img src={close} alt="close" width={24}/>
                </MyButton>
            </label>
            <div className="header-btn">
                <Link to={SAVED_PINS_ROUTE} className="header-btn__profile">
                    <MyButton className={"round-btn"}>
                        <Avatar letter={user?.nickname.slice(0, 1).toUpperCase() || "A"} width={28}/>
                    </MyButton>
                </Link>
            </div>
        </header>
    );
};

export default Header;
