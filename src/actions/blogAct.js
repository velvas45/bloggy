import Swal from 'sweetalert2'

export const createBlog = (dataBLog) => {
	return {
		type: 'ADD__BLOG',
		payload: dataBLog,
	}
}

export const deleteBlog = (id) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		},
	})

	Toast.fire({
		icon: 'success',
		title: 'Tulisan kamu berhasil di hapus.',
	})
	return {
		type: 'DELETE__BLOG',
		payload: id,
	}
}

export const editBlog = (data) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		},
	})

	Toast.fire({
		icon: 'success',
		title: 'Tulisan kamu berhasil di edit.',
	})
	return {
		type: 'EDIT__BLOG',
		payload: data,
	}
}
