import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Login from 'components/login/Login'
import LandingPage from 'components/landingPage/LandingPage'
import CreateBlog from 'components/createBlog/CreateBlog'
import EditBlog from 'components/editBlog/EditBlog'
import Header from 'components/dumbComponents/Header'
import Footer from 'components/dumbComponents/Footer'
import Notfound from 'components/404'

function routes() {
	return (
		<>
			<Header></Header>
			<div className='layout'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/login' component={Login} />
					<Route path='/create-blog' component={CreateBlog} />
					<Route path='/edit-blog/:id' component={EditBlog} />
					<Route exact component={Notfound} />
				</Switch>
			</div>
			<Footer></Footer>
		</>
	)
}

export default routes
