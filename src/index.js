import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import myReduxStore from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
	<React.StrictMode>
		{/* add provider */}
		<Provider store={myReduxStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
