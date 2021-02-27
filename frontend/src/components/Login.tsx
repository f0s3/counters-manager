import { /*useSelector,*/ useDispatch } from "react-redux"
import { login } from "../store/slices/user"
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login"
import "../styles/Login.css"

function isGoogleLoginResponse(target: any): target is GoogleLoginResponse {
	return target.profileObj && target.tokenId
}

export function Login() {
	const dispatch = useDispatch()
	const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		if (!isGoogleLoginResponse(response)) return
		const { profileObj, tokenId } = response
		dispatch(login({
			user: profileObj,
			tokenId
		}))
	}

	const onFailure = (reason: any) => {
		console.error(reason)
	}

	return ( 
		<div className="login">
			<h1>Login</h1>
			<GoogleLogin
				clientId="46404982759-7ii09dh3si8q6jeli0etigt02ro9497d.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</div>
	)
}