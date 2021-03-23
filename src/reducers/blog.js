const initialState = {
	datas: [],
}

const blog = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD__BLOG':
			return {
				...state,
				datas: [...state.datas, action.payload],
			}
		case 'DELETE__BLOG': {
			const filteredBlog = state.datas.filter(
				(data) => data.id !== action.payload
			)
			return {
				...state,
				datas: filteredBlog,
			}
		}
		case 'EDIT__BLOG': {
			const editData = state.datas.map((data) =>
				data.id == action.payload.id
					? {
							...data,
							title: action.payload.title,
							description: action.payload.description,
					  }
					: data
			)
			return {
				...state,
				datas: editData,
			}
		}

		default:
			return {
				...state,
			}
	}
}

export default blog
