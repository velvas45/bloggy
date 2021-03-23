import blog from 'reducers/blog'
import login from 'reducers/login'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
	blog: blog,
	login: login,
})

export default allReducers
