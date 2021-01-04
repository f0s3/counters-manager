import { Store } from "./types"

export const state: Store = {
	user: undefined,
	tokenId: undefined,
	services: [
		{
			id: 0,
			name: "Обленерго",
			unitType: "кВт",
			history: [{ value: 225, date: new Date() }]
		},
		{
			id: 1,
			name: "Водоканал",
			unitType: "л",
			history: [{ value: 25, date: new Date() }]
		}
	]
}
