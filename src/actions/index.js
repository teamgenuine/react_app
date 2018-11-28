import { CHECK_EMAIL, 
		 CHECK_PASSWORD, 
		 SIGN_IN,
		 ALERT_OK,
		 REMEMBER_USER,
		 REMEMBER_PASS,
		} from './actionTypes'


export const checkEmail = (email) => ({
	type: CHECK_EMAIL,
	email
})

export const checkPassword = (password) => ({
	type: CHECK_PASSWORD,
	password
})

export const signIn = (email, password) => ({
	type: SIGN_IN,
	email,
	password
})

export const rememberUser = () => ({
	type: REMEMBER_USER,
})

export const rememberPassword = () => ({
	type: REMEMBER_PASS,
})

export const alertOk = () => ({
	type: ALERT_OK,
})