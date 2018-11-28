/*
*This fuction will be use in the LoginForm('src/LoginForm')
*base on which function in 'mapDispatchToProps' is used
*/ 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHECK_EMAIL': 
			let user = action.email;
			
			//This parses an email
			let valid = user.match(/^([A-Za-z0-9_]+)@([A-Za-z0-9]+\.)+([A-Za-z0-9]{2,})$/);
			
			if (valid) {
				return Object.assign({
					...state, 
					email: action.email, 
					emailError: '',
					emailValid: true,
					isLogin: false,
				})
			} else {
				return Object.assign({
					...state,
					email: action.email, 
					emailError: 'Not correct format for email address',
					emailValid: false,
					isLogin: false,					
				})
			}
		case 'CHECK_PASS':
			let pass = action.password;
			
			if (!(pass.length < 6 || pass.length > 12)) {
				return Object.assign({
					...state,
					password: action.password, 
					passError: '',
					passValid: true,
					isLogin: false,
				})
			} else {
				return Object.assign({
					...state,
					password: action.password, 
					passError: 'Please use at least 6 - 12 chacters',
					passValid: false,
					isLogin: false,
				})
			}
		case 'SIGN_IN':
			if ((action.email.toLowerCase() === state.defaultEmail) && (action.password === state.defaultPass)){
				return Object.assign({
					...state, 
					isLogin: true,
					LoginError: 'Log in Success',
				})
			} else {
				return Object.assign({
					...state, 
					isLogin: true,
					LoginError: 'Invalid Email Address or Password',
				})
			}
		case 'ALERT_OK':
			return Object.assign({
				...state, 
				isLogin: false,
				LoginError: '',
			})
		case 'REMEMBER_USER':
			return Object.assign({
				...state,
				checkRemember: !state.checkRemember
			})
		case 'REMEMBER_PASS':
			if (state.checkRemember) {
				if (state.email.toLowerCase() === state.defaultEmail) {
					return Object.assign({
						...state,
						email: state.email, 
						password: state.defaultPass,
						emailValid: true,
						passValid: true,
						emailError: '',
						passError: '',
					})
				} 
			}
        default:
            return state;
    }
}
