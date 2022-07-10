enum fetchUserType {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
}

interface IUserState {
  isAuth: boolean;
  error: string | null;
  isLoading: boolean;
  nickname: string | null;
  password: string | null;
  email: string | null;
  avatar: string | null;
}

interface IFetchUserAction {
  type: fetchUserType.FETCH_USER;
}

interface IFetchUserActionSuccess {
  type: fetchUserType.FETCH_USER_SUCCESS;
  payload: string;
}

interface IFetchUserActionError {
  type: fetchUserType.FETCH_USER_ERROR;
  payload: string;
}

type UserAction =
  | IFetchUserAction
  | IFetchUserActionSuccess
  | IFetchUserActionError;

const initialState: IUserState = {
  isAuth: false,
  error: null,
  isLoading: false,
  nickname: null,
  password: null,
  email: null,
  avatar: null,
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case fetchUserType.FETCH_USER:
      return { ...state, isLoading: true };
    case fetchUserType.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        nickname: action.payload,
        password: action.payload,
        email: action.payload,
        avatar: action.payload,
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
