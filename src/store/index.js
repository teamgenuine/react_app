import { createStore } from 'redux'
import rootReducer from '../reducers'

const defaultState = {
	defaultEmail: 'bananaman_18@vananaz.com',
	defaultPass: 'abcde12345',
    email: '',
    password: '',
	emailError: '',
	passError: '',
	emailValid: false,
	passValid: false,
	isLogin: false,
	LoginError: '',
	checkRemember: false,
};

export default store = createStore(rootReducer, defaultState)