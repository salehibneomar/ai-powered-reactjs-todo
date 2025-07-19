import { toast } from 'react-toastify'

export const toastifyConfig = {
	position: 'bottom-center',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: true,
	draggable: true,
	theme: 'dark',
}

export const toastify = (message = '', type = 'success') => {
	return toast(message, { ...toastifyConfig, type })
}
