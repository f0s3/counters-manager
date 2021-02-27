import { combineReducers } from "redux"
import user from "./user"
import services from "./services"

const reducer = combineReducers({
  user,
  services
}) 

export default reducer
export type RootState = ReturnType<typeof reducer>
