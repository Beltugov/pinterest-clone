import { fetchUserType } from "./fetch";

export interface IUser {
  firstName: string | null;
  secondName: string | null;
  password: string | null;
  email: string | null;
  avatar: string | null;
}

export interface UserState {
  isAuth: boolean;
  error: string | null;
  isLoading: boolean;
  user: IUser;
}

interface IFetchUserAction {
  type: fetchUserType.FETCH_USER;
}

interface IFetchUserActionSuccess {
  type: fetchUserType.FETCH_USER_SUCCESS;
  payload: IUser;
}

interface IFetchUserActionError {
  type: fetchUserType.FETCH_USER_ERROR;
  payload: any;
}

export type UserAction =
  | IFetchUserAction
  | IFetchUserActionSuccess
  | IFetchUserActionError;
