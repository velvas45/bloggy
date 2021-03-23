import React from 'react'
import { AiOutlineHeart, AiTwotoneEdit } from 'react-icons/ai'
import { IoTrashBin } from 'react-icons/io5'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import { useSelector, useDispatch } from 'react-redux'
import 'assets/css/landingPage.scss'
import { deleteBlog } from 'actions/blogAct'
import Swal from 'sweetalert2'

function LandingPage() {
	const dispatch = useDispatch()
	const history = useHistory()
	const { datas } = useSelector((state) => state.blog)
	const { isLogin, username } = useSelector((state) => state.login)

	// func handle delete
	const handleDelete = (e) => {
		Swal.fire({
			title: 'Apakah kamu yakin?',
			text: 'Kamu akan menghapus selamanya tulisan ini',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteBlog(e.target.id))
			}
		})
	}

	// handle edit
	const handleEdit = (e) => {
		const id = e.target.id
		history.push(`/edit-blog/${id}`)
	}

	return (
		<div>
			{isLogin ? (
				<h2 className='text-center'>Selamat datang {username}</h2>
			) : (
				<h2 className='text-center'>Hello Guest...</h2>
			)}

			<Container>
				<div className='new__blog text-right'>
					<Link to='/create-blog'>
						<Button variant='light'>Create new blog</Button>
					</Link>
				</div>
				{datas.length >= 1 &&
					datas.map((data, index) => {
						if (index % 2 == 0) {
							return (
								<Bounce right>
									<Card className='p-3 my-3 content__blog' key={index}>
										<Row className='justify-content-between'>
											<Col md={5}>
												<div className='Profile'>
													<p>{username}</p>
												</div>
												<div className='d-flex-column mt-3'>
													<h6>{data.title}</h6>
													<p>{data.description}</p>
												</div>
												<Button variant='outline-primary'>Read more</Button>{' '}
											</Col>
											<Col md={5} className='text-right'>
												<Row className='justify-content-end'>
													<Col xs={1}>
														<AiOutlineHeart className='content__blog--saveIcon' />
													</Col>
													<Col xs={1}>
														<AiTwotoneEdit
															id={data.id}
															className='content__blog--editIcon'
															onClick={(e) => handleEdit(e)}
														/>
													</Col>
													<Col xs={1}>
														<IoTrashBin
															id={data.id}
															className='content__blog--delIcon'
															onClick={(e) => handleDelete(e)}
														/>
													</Col>
												</Row>
											</Col>
										</Row>
									</Card>
								</Bounce>
							)
						} else {
							return (
								<Bounce left>
									<Card className='p-3 my-3 content__blog' key={index}>
										<Row className='justify-content-between'>
											<Col md={5}>
												<div className='Profile'>
													<p>{username}</p>
												</div>
												<div className='d-flex-column mt-3'>
													<h6>{data.title}</h6>
													<p>{data.description}</p>
												</div>
												<Button variant='outline-primary'>Read more</Button>{' '}
											</Col>
											<Col md={5} className='text-right'>
												<Row className='justify-content-end'>
													<Col xs={1}>
														<AiOutlineHeart className='content__blog--saveIcon' />
													</Col>
													<Col xs={1}>
														<AiTwotoneEdit
															id={data.id}
															className='content__blog--editIcon'
															onClick={(e) => handleEdit(e)}
														/>
													</Col>
													<Col xs={1}>
														<IoTrashBin
															id={data.id}
															className='content__blog--delIcon'
															onClick={(e) => handleDelete(e)}
														/>
													</Col>
												</Row>
											</Col>
										</Row>
									</Card>
								</Bounce>
							)
						}
					})}

				{datas.length < 1 && isLogin && (
					<>
						<Row className='text-center mt-5'>
							<Col>
								<h5>
									Kamu belum membuat tulisan, yuk buat tulisan sekarang{' '}
									{username}.
								</h5>
							</Col>
						</Row>
					</>
				)}

				{!isLogin && (
					<>
						<Row className='text-center mt-5'>
							<Col>
								<h5>
									Hallo selamat datang di bloggy, mari membuat tulisan pertama
									mu.
								</h5>
							</Col>
						</Row>
					</>
				)}
			</Container>
		</div>
	)
}

export default LandingPage
