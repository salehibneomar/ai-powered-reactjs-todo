import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const defaultSwalOptions = {
	background: '#1e293b',
	color: '#fff',
	showCloseButton: true,
	showConfirmButton: false,
}

const ReactSwal = withReactContent(Swal)

export function sweetalertModal(options = {}) {
	return ReactSwal.fire({
		...defaultSwalOptions,
		...options,
	})
}
