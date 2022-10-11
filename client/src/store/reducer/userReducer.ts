import { UserAction, UserState } from "../../types/user";
import { fetchUserType } from "../../types/fetch";
import { Reducer } from "redux";

const initialState: UserState = {
  user: {
    firstName: null,
    secondName: null,
    password: null,
    email: null,
    avatar: null,
  },
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
): UserState => {
  switch (action.type) {
    case fetchUserType.FETCH_USER:
      return { ...state, isLoading: true };
    case fetchUserType.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload,
      };

    case fetchUserType.FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
