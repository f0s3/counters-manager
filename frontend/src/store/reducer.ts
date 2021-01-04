import { state as initialState } from "./initialState"
import { Store, ActionTypes, LOGIN, LOGOUT, ADD_SERVICE } from "./types"

export function reducer(state = initialState, action: ActionTypes): Store {
	switch(action.type) {
		case LOGIN:
			return { ...state, user: action.user, tokenId: action.tokenId }

		case LOGOUT:
			return { ...state, user: undefined, tokenId: undefined }

		case ADD_SERVICE:
			return { ...state, services: [ ...state.services, action.service ] }

		default:
			return state
	}
}