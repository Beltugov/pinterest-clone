export enum UserActionType {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    UN_AUTHORIZATION = "UN_AUTHORIZATION",
}

export interface IUser {
    nickname: string;
    password: string;
    email: string;
    avatar: string | null;
}

export interface UserState {
    error: unknown | null;
    isLoading: boolean;
    isAuth: boolean;
    user: IUser | null;
}

interface IFetchUserAction {
    type: UserActionType.FETCH_USER;
}

interface IFetchUserActionSuccess {
    type: UserActionType.FETCH_USER_SUCCESS;
    payload: IUser;
}

interface IFetchUserActionError {
    type: UserActionType.FETCH_USER_ERROR;
    payload: unknown;
}

interface UnAuthorizationError {
    type: UserActionType.UN_AUTHORIZATION;
}

export type UserAction =
    | IFetchUserAction
    | IFetchUserActionSuccess
    | IFetchUserActionError
    | UnAuthorizationError;
