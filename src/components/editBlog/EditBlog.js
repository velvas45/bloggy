import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory, Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editBlog } from 'actions/blogAct'

function EditBlog() {
	const history = useHistory()
	const dispatch = useDispatch()
	const { isLogin } = useSelector((state) => state.login)
	const { datas } = useSelector((state) => state.blog)
	const [blog, setBlog] = useState({
		id: '',
		title: '',
		description: '',
	})
	const { id } = useParams()

	useEffect(() => {
		if (!isLogin) {
			history.push('/login')
		} else {
			const filterDataBlog = datas.map((data) =>
				data.id == id ? { id } : { id: '', title: '', description: '' }
			)
			setBlog({ ...blog, id: filterDataBlog[0].id })
		}
	}, [isLogin])

	// func handleForm
	const handleForm = (e) => {
		e.preventDefault()

		dispatch(editBlog(blog))
		history.push(`/`)
	}
	return (
		<div>
			<Container>
				<Row className='my-5 text-center'>
					<Col>
						<h2>Edit Tulisanmu</h2>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col md={8}>
						{datas.map((data) =>
							data.id == id ? (
								<Form onSubmit={(e) => handleForm(e)}>
									<Form.Group controlId='title'>
										<Form.Label>Title</Form.Label>
										<Form.Control
											type='text'
											placeholder={data.title || ''}
											onChange={(e) =>
												setBlog({ ...blog, title: e.target.value })
											}
										/>
									</Form.Group>
									<Form.Group controlId='description'>
										<Form.Label>Description</Form.Label>
										<Form.Control
											as='textarea'
											rows={5}
											placeholder={data.description || ''}
											onChange={(e) =>
												setBlog({ ...blog, description: e.target.value })
											}
										/>
									</Form.Group>
									<Form.Group>
										<Button variant='primary' type='submit'>
											Submit
										</Button>
										<Link to='/' className='btn ml-3'>
											Go back
										</Link>
									</Form.Group>
								</Form>
							) : null
						)}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default EditBlog
