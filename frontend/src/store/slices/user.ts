import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  googleId: string
  imageUrl: string
  email: string
  name: string
  givenName: string
  familyName: string
}

export interface UserStore {
  user?: User
  tokenId?: string
}

export interface Login {
  user: User
  tokenId: string
}

const userSlice = createSlice({
  name: "user",
  initialState: {} as UserStore,
  reducers: {
    login: (_state: UserStore, { payload }: PayloadAction<Login>) => payload,

    logout: () => ({})
  }
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions
