import axios from 'axios'

const todoService = {
	async generateTodo(user_input) {
		let response = null
		try {
			const { data } = await axios.post('/api/generate-todo', {
				user_input,
			})
			response = data
		} catch (error) {
			console.error('API error:', error)
		}
		return response
	}
}

export default todoService
