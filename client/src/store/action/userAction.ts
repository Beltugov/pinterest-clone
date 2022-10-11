import {fetchUserType} from "../../types/fetch";
import {IUser, UserAction} from "../../types/user";
import {Dispatch} from "redux";
import {BASE_URL} from "../../consts/http";

// export const registrationUser = async () => {};

export const logInUser =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserAction>): Promise<IUser | void> => {
    console.log("start");
    dispatch({ type: fetchUserType.FETCH_USER });
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
        console.log(data);
        dispatch({ type: fetchUserType.FETCH_USER_SUCCESS, payload: data });
      })
      .catch((reject) => {
        dispatch({ type: fetchUserType.FETCH_USER_ERROR, payload: reject });
      });
  };
