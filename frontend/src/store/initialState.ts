import { Store } from "./types"

export const state: Store = {
	user: undefined,
	services: [
		{
			id: 0,
			name: "Обленерго",
			history: [{ value: 15, date: new Date() }]
		},
		{
			id: 1,
			name: "Водоканал",
			history: [{ value: 25, date: new Date() }]
		}
	]
}
