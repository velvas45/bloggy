import React, { useState, useEffect } from 'react'
import loginImage from 'assets/img/login-3.jpg'
import 'assets/css/login.scss'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { isLoginAct, isLoginLoading } from 'actions/loginAct'
import Loader from 'react-loader-spinner'

function Login() {
	const [username, setUsername] = useState('')
	const dispatch = useDispatch()
	const history = useHistory()
	const { isLoading, isLogin } = useSelector((state) => state.login)

	useEffect(() => {
		if (isLogin) history.push('/create-blog')
	}, [isLogin])

	// func input
	const handleInput = (e) => {
		const name = e.target.value
		setUsername(name)
	}

	// func login
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(isLoginLoading())
		setTimeout(() => {
			dispatch(isLoginAct(username))
			history.push('/create-blog')
		}, 4000)
	}
	return (
		<>
			<div>
				<section>
					<div className='imgBx'>
						<img src={loginImage} alt='Login Image' />
					</div>
					{!isLoading ? (
						<div className='contentBx'>
							<div className='formBx'>
								<h2>Login</h2>
								<form onSubmit={(e) => handleSubmit(e)}>
									<div className='inputBx'>
										<span>Username</span>
										<input
											type='text'
											name='username'
											required
											onChange={(e) => handleInput(e)}
										/>
									</div>
									<div className='inputBx'>
										<span>Password</span>
										<input type='password' name='password' required />
									</div>
									<div className='inputBx'>
										<input
											type='submit'
											value='Sign In'
											name='submit'
											className='btn btn-primary'
										/>
									</div>
								</form>
							</div>
						</div>
					) : (
						<div className='contentBx'>
							<Loader
								type='Bars'
								color='#00BFFF'
								height={100}
								width={100}
								timeout={4000} //3 secs
							/>
						</div>
					)}
				</section>
			</div>
		</>
	)
}

export default Login
