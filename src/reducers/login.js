const initialState = {
	isLogin: false,
	username: null,
	isLoading: false,
}

const login = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN__LOADING':
			return {
				...state,
				isLoading: true,
			}
		case 'LOGIN__SUCCESS':
			return {
				...state,
				isLoading: false,
				isLogin: true,
				username: action.payload,
			}

		default:
			return {
				...state,
			}
	}
}

export default login
