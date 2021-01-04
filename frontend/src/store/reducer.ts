import { state as initialState } from "./initialState"
import { ActionTypes, LOGIN, LOGOUT } from "./types"

export function reducer(state = initialState, action: ActionTypes ) {
	switch(action.type) {
		case LOGIN:
			return { user: action.user }

		case LOGOUT:
			return { user: undefined }

		default:
			return state
	}
}