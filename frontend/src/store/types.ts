export interface Store {
	user?: User
	tokenId?: string
	services: Service[]
}

export interface User  {
	googleId: string
	imageUrl: string
	email: string
	name: string
	givenName: string
	familyName: string
}

export interface Service {
	id: number
	name: string
	unitType: string
	history: Counter[]
}

export interface Counter {
	value: number
	date: Date
}

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ADD_SERVICE = "ADD_SERVICE"

export interface LoginAction {
	type: typeof LOGIN
	user: User
	tokenId: string
}

export interface LogoutAction {
	type: typeof LOGOUT
}

export interface AddServiceAction {
	type: typeof ADD_SERVICE
	service: Service
}

export type ActionTypes = LoginAction | LogoutAction | AddServiceAction
