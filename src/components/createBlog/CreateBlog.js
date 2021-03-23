import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createBlog } from 'actions/blogAct'
import { FaRegSmileWink } from 'react-icons/fa'

function CreateBlog() {
	const history = useHistory()
	const dispatch = useDispatch()
	const { isLogin } = useSelector((state) => state.login)
	const [blog, setBlog] = useState({
		title: '',
		description: '',
	})

	useEffect(() => {
		if (!isLogin) {
			history.push('/login')
		} else {
			return
		}
	}, [isLogin])

	// func handleForm
	const handleForm = (e) => {
		e.preventDefault()

		// built id
		const id = uuidv4()

		const dataBlog = {
			id: id,
			title: blog.title,
			description: blog.description,
		}

		dispatch(createBlog(dataBlog))
		history.push('/')
	}
	return (
		<div>
			<Container>
				<Row className='my-5 text-center'>
					<Col>
						<h2>
							Tuliskan idemu di sini ya <FaRegSmileWink />
						</h2>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col md={8}>
						<Form onSubmit={(e) => handleForm(e)}>
							<Form.Group controlId='title'>
								<Form.Label>Title</Form.Label>
								<Form.Control
									type='text'
									placeholder='Masukkan title...'
									onChange={(e) => setBlog({ ...blog, title: e.target.value })}
								/>
							</Form.Group>
							<Form.Group controlId='description'>
								<Form.Label>Description</Form.Label>
								<Form.Control
									as='textarea'
									rows={5}
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
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default CreateBlog
