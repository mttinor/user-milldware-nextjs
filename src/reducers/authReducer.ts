export type TUserPayload = {};

export type AuthAction =
  | { type: "LOGIN"; payload: TUserPayload | undefined }
  | { type: "LOGOUT" };

export interface AuthState {
  isAuthenticated: boolean;
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  id: 0,
  name: "",
  username: "",
  email: "",
  role: "",
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        id: 0,
        name: "",
        username: "",
        email: "",
        role: "",
      };
    default:
      return state;
  }
};

export default AuthReducer;
