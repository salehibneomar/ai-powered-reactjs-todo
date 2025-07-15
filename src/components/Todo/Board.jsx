import TodoCard from './Card'

const TodoBoard = ({ todos = [] }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{todos.map(todo => (
				<TodoCard key={todo.id} todo={todo} />
			))}
		</div>
	)
}

export default TodoBoard
