export interface State {
	user?: "user"
}

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export interface LoginAction {
	type: typeof LOGIN
	user: "user"
}

export interface LogoutAction {
	type: typeof LOGOUT
}

export type ActionTypes = LoginAction | LogoutAction
