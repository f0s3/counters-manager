import { LoginAction, LogoutAction, LOGIN, LOGOUT } from "./types"

export function login(user: "user"): LoginAction {
	return {
		type: LOGIN,
		user
	}
}

export function logout(): LogoutAction {
	return {
		type: LOGOUT
	}
}

