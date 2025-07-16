import axios from 'axios'
import { useState } from 'react'

const CreateTodo = () => {
	let [userInput, setUserInput] = useState('')
	let [loading, setLoading] = useState(false)

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
		const payload = userInput.trim() || ''
		if (payload) {
			const data = await generateTodo(payload)
			console.log('Generated Todo:', data)
		}
		setLoading(false)
		setUserInput('')
	}

	return (
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
	)
}

export default CreateTodo
