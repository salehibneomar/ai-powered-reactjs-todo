import axios from 'axios'
import { useState } from 'react'
import todoService from '../../services/todo-service'

const CreateTodo = props => {
	const [userInput, setUserInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const { onTodoCreation } = props

	async function generateTodo(user_input) {
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

	const handleSubmit = async event => {
		event.preventDefault()
		setLoading(true)
		setError('')
		const payload = userInput.trim() || ''
		if (payload) {
			const data = await generateTodo(payload)
			console.log('Generated Todo:', data)
			if (!data) {
				setError('Failed to generate todo. Please try again.')
			} else {
				onTodoCreation?.(data)
			}
		}
		setLoading(false)
		setUserInput('')
	}

	return (
		<>
			{error && (
				<div className="mb-4 w-full px-4 py-3 rounded bg-red-100 border border-red-400 text-red-700 text-base flex items-center justify-between">
					<span>{error}</span>
					<button
						type="button"
						className="ml-4 text-red-700 hover:text-red-900 font-bold px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
						onClick={() => setError('')}
						aria-label="Close alert"
					>
						&times;
					</button>
				</div>
			)}
			<form className="w-full" method="POST" onSubmit={handleSubmit}>
				<div className="relative flex items-center w-full">
					<input
						type="text"
						placeholder="Type what you want to do..."
						className="w-full h-20 pr-28 pl-5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
						name="user_input"
						value={userInput}
						onChange={e => setUserInput(e.target.value)}
						disabled={loading}
						autoComplete="off"
					/>
					<button
						type="submit"
						className={`absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 rounded-md bg-blue-600 text-white font-medium text-base shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
							loading ? 'cursor-not-allowed' : 'cursor-pointer'
						}`}
						disabled={loading}
					>
						{loading ? 'Generating...' : 'Generate'}
					</button>
				</div>
			</form>
		</>
	)
}

export default CreateTodo
