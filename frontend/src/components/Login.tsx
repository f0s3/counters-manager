import { GoogleLogin } from "react-google-login"
import { googleClientId, loginOnSuccess } from "../services/googleLogin"
import "../styles/Login.css"

export function Login() {
	return <>
		<div className="login">
			<h1>Login</h1>
			<GoogleLogin
				clientId={googleClientId}
				buttonText="Login"
				onSuccess={loginOnSuccess}
				onFailure={console.error}
				cookiePolicy="single_host_origin"
			/>
		</div>
	</>
}