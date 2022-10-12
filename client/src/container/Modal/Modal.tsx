import React, { useState } from "react";
import { IModal } from "../../types/modal";
import MyInput from "../../components/MyInput/MyInput";
import "./Modal.scss";
import Logo from "../../assets/Logo.png";
import close from "../../assets/close.svg";
import MyButton from "../../components/MyButton/MyButton";
import { logInUser } from "../../store/action/userAction";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";

const Modal: React.FC<IModal> = ({ type, setModalActive, setType }) => {
  const dispatch = useTypeDispatch();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  const validationEmail = () => {
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailErrorMessage("Недопустимый E-mail");
      setEmailError(true);
      return false;
    } else if (email.length > 40) {
      setEmailError(true);
      setEmailErrorMessage("E-mail не может быть больше 40 символов");
      return false;
    }
    setEmailError(false);
    return true;
  };

  const validationPassword = () => {
    if (password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Пароль не может быть меньше 6 символов");
      return false;
    } else if (password.length > 20) {
      setPasswordError(true);
      setPasswordErrorMessage("Пароль не может быть больше 20 символов");
      return false;
    }
    setPasswordError(false);
    return true;
  };

  const fetchUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    validationEmail();
    validationPassword();
    if (validationEmail() && validationPassword()) {
      dispatch(logInUser(email, password));
    }
  };

  return (
    <div className="modal" onClick={() => setModalActive(false)}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content__close">
          <MyButton
            className={"round-btn"}
            onClick={() => setModalActive(false)}
          >
            <img src={close} alt={"close"} width={24} />
          </MyButton>
        </div>
        <div className="modal-content__logo">
          <img src={Logo} alt="logo" width={40} />
        </div>
        <h1 className="modal-content__title">Добро пожаловать в Pinterest</h1>
        <form className="modal-content__form" method="post" noValidate={true}>
          <label htmlFor="email">Адрес электронной почты:</label>
          <MyInput
            isError={emailError}
            type="email"
            id="email"
            placeholder="Адрес электронной почты"
            value={email}
            change={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <span className="error-message">* {emailErrorMessage}</span>
          )}
          <label htmlFor="password">Пароль</label>
          <MyInput
            isError={passwordError}
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            change={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="error-message">* {passwordErrorMessage} </span>
          )}
          <MyButton
            type="submit"
            className="simple-btn red"
            onClick={(e) => fetchUser(e)}
          >
            {type === "login" ? "Войти" : "Зарегистрироваться"}
          </MyButton>
        </form>
        <div className="modal-content__question">
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
    </div>
  );
};
export default Modal;
