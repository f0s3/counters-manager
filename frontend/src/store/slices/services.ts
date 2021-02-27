import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Service {
  id: number
  name: string
  unitType: string
  history: Counter[]
}

export interface ServiceAction {
  name: string
  unitType: string
}

export interface Counter {
  value: number
  date: Date
}

const tempServices = [
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

const servicesSlice = createSlice({
  name: "services",
  initialState: [...tempServices] as Service[],
  reducers: {
    add: (state, { payload }: PayloadAction<ServiceAction>) => {
      const { name, unitType } = payload
      const lastService = state[state.length-1]
      const lastId = lastService?.id ?? 0
      state.push({
        id: lastId+1,
        name,
        unitType,
        history: []
      })
    }
  }
})

export default servicesSlice.reducer
export const { add } = servicesSlice.actions
