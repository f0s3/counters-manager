import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login"
import { login, logout } from "../store/slices/user"
import { store } from "../store"

export const googleClientId =
  "46404982759-7ii09dh3si8q6jeli0etigt02ro9497d.apps.googleusercontent.com"

export type GLoginResponse = GoogleLoginResponse | GoogleLoginResponseOffline

export function isGLoginOffline(target: GLoginResponse): target is GoogleLoginResponseOffline {
  return !!target.code
}

export const loginOnSuccess = (response: GLoginResponse) => {
  console.log(response)
  if (isGLoginOffline(response)) return
  const { profileObj, tokenId } = response
  store.dispatch(login({
    user: profileObj,
    tokenId
  }))
}

export const logoutOnSuccess = () => {
  store.dispatch(logout())
}
