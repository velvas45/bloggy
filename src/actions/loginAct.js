export const isLoginAct = (username) => {
	return {
		type: 'LOGIN__SUCCESS',
		payload: username,
	}
}

export const isLoginLoading = () => {
	return {
		type: 'LOGIN__LOADING',
	}
}
