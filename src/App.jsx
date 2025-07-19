import TodoBoard from './components/Todo/Board'
import CreateTodo from './components/Todo/Create'
import { useTodoStore } from './stores/todo-store'

const App = () => {
	const todoStore = useTodoStore()
	const todos = todoStore.todos

	const handleTodoCreation = async todo => {
		if (todo) {
			const newTodo = {
				...todo,
				completed: false,
				id: todos.length + 1,
			}
			await todoStore.addTodo(newTodo)
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
