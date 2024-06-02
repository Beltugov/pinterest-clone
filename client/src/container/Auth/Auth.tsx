import React from 'react';
import Logo from "../../assets/Logo.png";
import Form from "../../components/Form/Form";
import {IAuth} from "../../types/auth";
import "./Auth.scss"

const Auth = ({
                  type,
                  setType
              }: { type: IAuth["authType"], setType: React.Dispatch<React.SetStateAction<"registration" | "login">> }) => {
    return (
        <div className="auth">
            <div className="auth__logo">
                <img src={Logo} alt="logo" width={40}/>
            </div>
            <h1 className="auth__title">Добро пожаловать в Pinterest</h1>
            <Form type={type}/>
            <div className="auth__question">
                {type === "login" ? "Нет аккаунта?" : "Есть аккаунт?"}
                <span
                    className="change-type-btn"
                    onClick={() =>
                        type === "login" ? setType("registration") : setType("login")
                    }
                >
            {type === "login" ? "Зарегистрироваться" : "Войти"}
          </span>
            </div>
        </div>
    );
};

export default Auth;