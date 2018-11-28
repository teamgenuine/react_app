import {CHECK_EMAIL, CHECK_PASSWORD} from './actionTypes'


export const checkEmail = (email) => ({
	type: CHECK_EMAIL,
	email
})

export const checkPassword = (password) => ({
	type: CHECK_PASSWORD,
	password
})