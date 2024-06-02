import {UserAction, UserActionType, UserState} from "../../types/user";
import {Reducer} from "redux";

const initialState: UserState = {
    user: null,
    isLoading: true,
    isAuth: false,
    error: null,
};

export const userReducer: Reducer<UserState, UserAction> = (
    state = initialState,
    action
): UserState => {
    switch (action.type) {
        case UserActionType.UN_AUTHORIZATION:
            return {...state, isLoading: false, isAuth: false};
        case UserActionType.FETCH_USER:
            return {...state, isLoading: true};
        case UserActionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
            };

        case UserActionType.FETCH_USER_ERROR:
            return {
                user: null,
                isLoading: false,
                isAuth: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
