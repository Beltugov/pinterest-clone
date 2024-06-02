import {IUser, UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import {BASE_URL} from "../../consts/http";
import jwtDecode from "jwt-decode";

export const registrationUser = (nickname: string, email: string, password: string) =>
    async (dispatch: Dispatch<UserAction>): Promise<IUser | void> => {
        dispatch({type: UserActionType.FETCH_USER});
        await fetch(`${BASE_URL}/user/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nickname: nickname,
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.errors) {
                    dispatch({type: UserActionType.FETCH_USER_ERROR, payload: data.errors})
                } else {
                    const decodeData: {
                        exp: number,
                        iat: number,
                        user: IUser
                    } = jwtDecode(data.result.userToken)
                    dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: decodeData.user});
                }
            })
            .catch((reject) => {
                dispatch({type: UserActionType.FETCH_USER_ERROR, payload: reject});
            });
    };

export const logInUser = (email: string, password: string) => async (dispatch: Dispatch<UserAction>): Promise<IUser | void> => {
    dispatch({type: UserActionType.FETCH_USER});
    await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.errors) {
                dispatch({type: UserActionType.FETCH_USER_ERROR, payload: data.errors})
            } else {
                const decodeData: {
                    exp: number,
                    iat: number,
                    user: IUser
                } = jwtDecode(data.result.userToken)
                localStorage.setItem("UserToken", data.result.userToken)
                dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: decodeData.user});
            }
        })
        .catch((reject) => {
            dispatch({type: UserActionType.FETCH_USER_ERROR, payload: reject});
        });
};

export const authUser = (token: string | null) => async (dispatch: Dispatch<UserAction>): Promise<IUser | void> => {
    if (token === null) {
        dispatch({type: UserActionType.UN_AUTHORIZATION});
        return
    }
    dispatch({type: UserActionType.FETCH_USER});
    await fetch(`${BASE_URL}/user/auth`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
        .then((res) => {
            console.log(res.status)
            if (res.status === 200) {
                return res.json()
            } else {
                localStorage.removeItem("UserToken")
            }
        })
        .then((data) => {
            if (data.errors) {
                dispatch({type: UserActionType.FETCH_USER_ERROR, payload: data.errors})
            } else {
                const decodeData: {
                    exp: number,
                    iat: number,
                    user: IUser
                } = jwtDecode(data.token)
                localStorage.setItem("UserToken", data.token)
                dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: decodeData.user});
            }
        })
        .catch((reject) => {
            dispatch({type: UserActionType.FETCH_USER_ERROR, payload: reject});
        });
}
