export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOAD_USER = 'LOAD_USER';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  error: string | null;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: User;
  };
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: User;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LoadUserAction;