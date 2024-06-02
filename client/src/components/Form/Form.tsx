import React, {useEffect, useState} from 'react';
import FormInput from "../FormInput/FormInput";
import MyButton from "../MyButton/MyButton";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {IAuth} from "../../types/auth";
import "./Form.scss"
import {validationEmail, validationNickname, validationPassword} from "../../utils/validation";
import {logInUser, registrationUser} from "../../store/action/userAction";

const Form = ({type}: { type: IAuth["authType"] }) => {
    const dispatch = useTypeDispatch();
    const [nickname, setNickname] = useState<string>("");
    const [nicknameErrorMessage, setNicknameErrorMessage] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");
    const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | null>(null);

    const errors = useTypeSelector((state) => state.userReducer.error)

    useEffect(() => {
        if (errors && Array.isArray(errors)) {
            errors.map((error: {
                msg: string
                param: string
            }) => {
                error.param === "nickname" && setNicknameErrorMessage(error.msg)
                error.param === "email" && setEmailErrorMessage(error.msg)
                error.param === "password" && setPasswordErrorMessage(error.msg)
            })
        }
    }, [errors]);

    const fetchUser = (e: React.FormEvent<HTMLFormElement>, type: IAuth["authType"], ...param: string[]) => {
        e.preventDefault()
        const [email, password, nickname] = param

        const validationNicknameResult = type === "registration" ? validationNickname(nickname) : null
        const validationEmailResult = validationEmail(email)
        const validationPasswordResult = validationPassword(password)

        if (validationEmailResult || validationPasswordResult || (type === "registration" && validationNicknameResult)) {
            setEmailErrorMessage(validationEmailResult);
            setPasswordErrorMessage(validationPasswordResult);
            setNicknameErrorMessage(validationNicknameResult);
            return
        }

        if (type === "registration") {
            dispatch(registrationUser(nickname, email, password));
        } else {
            dispatch(logInUser(email, password));
        }
    };

    return (
        <form className="form" method="post" noValidate={true}
              onSubmit={(e) => type === "login" ? fetchUser(e, type, email, password) : fetchUser(e, type, email, password, nickname)}>
            {type === "registration" &&
                <FormInput type={nickname} placeholder={"Имя профиля"} value={nickname} setValue={setNickname}
                           required={true} errorMessage={nicknameErrorMessage}/>}
            <FormInput type={"email"} placeholder={"Адрес электронной почты"} value={email}
                       setValue={setEmail} required={true} errorMessage={emailErrorMessage}/>
            <FormInput type={"password"} placeholder={"Пароль"} value={password} setValue={setPassword}
                       required={true} errorMessage={passwordErrorMessage}/>
            <MyButton className="simple-btn red">
                {type === "login" ? "Войти" : "Зарегистрироваться"}
            </MyButton>
        </form>
    );
};

export default Form;