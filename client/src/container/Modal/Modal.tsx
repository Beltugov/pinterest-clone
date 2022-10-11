import React, { useState } from "react";
import { IModal } from "../../types/modal";
import MyInput from "../../components/MyInput/MyInput";
import "./Modal.scss";
import Logo from "../../assets/Logo.png";
import MyButton from "../../components/MyButton/MyButton";
import { logInUser } from "../../store/action/userAction";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import validator from "validator";

const Modal: React.FC<IModal> = ({ type, setModalActive, setType }) => {
  const dispatch = useTypeDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validation = (value: string) => {
    switch (value) {
      case firstName:
        return validator.isEmpty(firstName)
          ? validator.isLength(email, {
              max: 40,
            })
          : false;
      case secondName:
        return (
          validator.isEmpty(secondName) &&
          validator.isLength(email, {
            max: 40,
          })
        );
      case email:
        return (
          validator.isEmpty(email) &&
          validator.isEmail(email) &&
          validator.isLength(email, {
            max: 40,
          })
        );
      case password:
        return validator.isEmpty(password);
      default:
        return false;
    }
    validator.isEmpty(firstName);
    validator.isEmpty(secondName);
    validator.isEmpty(email);
    validator.isEmpty(password);
  };

  const fetchUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(logInUser(email, password));
  };
  return (
    <div className="modal" onClick={() => setModalActive(false)}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content__logo">
          <img src={Logo} alt="logo" width={40} />
        </div>
        <h1 className="modal-content__title">Добро пожаловать в Pinterest</h1>
        <form className="modal-content__form" method="post" noValidate={true}>
          {type === "registration" && (
            <>
              <label htmlFor="firstName">Имя:</label>
              <MyInput
                isError={!validation(firstName)}
                type="text"
                id="firstName"
                placeholder="Имя"
                value={firstName}
                change={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="firstName">Фамилия:</label>
              <MyInput
                isError={false}
                type="text"
                id="secondName"
                placeholder="Фамилия"
                value={secondName}
                change={(e) => setSecondName(e.target.value)}
              />
            </>
          )}
          <label htmlFor="email">Адрес электронной почты:</label>
          <MyInput
            isError={false}
            type="email"
            id="email"
            placeholder="Адрес электронной почты"
            value={email}
            change={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Пароль</label>
          <MyInput
            isError={false}
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            change={(e) => setPassword(e.target.value)}
          />
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
