import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
	const { branding } = props
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					{' '}
					{branding}{' '}
				</Link>{' '}
			</div>{' '}
		</nav>
	)
}

Header.defaultProps = {
	branding: 'Bloggy',
}

Header.propTypes = {
	branding: PropTypes.string.isRequired,
}

export default Header
