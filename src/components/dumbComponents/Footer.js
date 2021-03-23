import React from 'react'
import 'assets/css/footer.scss'

export default function Footer() {
	const getYear = () => {
		const year = new Date().getFullYear()
		return year
	}
	return (
		<footer className='mt-5'>
			<div className='container text-center'>
				<h3>
					{getYear()} Copyright Helmi Agustiawan &#169; All right reserved
					&#169; Made in Bogor
				</h3>
			</div>
		</footer>
	)
}
