import { ServiceList } from "./ServiceList"
import { GoogleLogout } from "react-google-login"
import { googleClientId, logoutOnSuccess } from "../services/googleLogin"

export function Home() {
	return <>
		<GoogleLogout
			clientId={googleClientId}
			onLogoutSuccess={logoutOnSuccess}
		/>
		<ServiceList />
	</>
}
