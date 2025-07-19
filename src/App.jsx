import { toastify } from './utils/toastify'
import TodoBoard from './components/Todo/Board'
import CreateTodo from './components/Todo/Create'
import todoService from './services/todo-service'
import { useTodoStore } from './stores/todo-store'

const App = () => {
	const todoStore = useTodoStore()
	const todos = todoStore.todos

	const handleTodoCreation = async payload => {
		if (payload) {
			const data = await todoService.generateTodo(payload)
			if (!data) {
				toastify('Failed to generate todo. Please try again.!', 'error')
			} else {
				const newTodo = {
					...data,
					completed: false,
					id: todos.length + 1,
				}
				await todoStore.addTodo(newTodo)
				toastify('Todo generated successfully!', 'success')
			}
		}
	}

	return (
		<>
			<div className="grid grid-cols-12 gap-y-8 gap-x-0 w-full">
				<div className="col-span-12">
					<CreateTodo onTodoCreation={handleTodoCreation} />
				</div>
				<div className="col-span-12">
					<TodoBoard todos={todos} />
				</div>
			</div>
		</>
	)
}

export default App
