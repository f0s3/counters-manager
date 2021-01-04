import { User, LoginAction, LogoutAction, LOGIN, LOGOUT } from "./types"

export function login(user: User, tokenId: string): LoginAction {
	return {
		type: LOGIN,
		user,
		tokenId
	}
}

export function logout(): LogoutAction {
	return {
		type: LOGOUT
	}
}

