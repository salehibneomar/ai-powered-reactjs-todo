import TodoCard from './Card'

const TodoBoard = props => {
	const { todos, onDelete, onView } = props
	const handleOnDelete = async todo => {
		onDelete?.(todo)
	}

	const handleOnView = async todo => {
		onView?.(todo)
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{todos.map((todo, index) => (
				<TodoCard
					key={`${todo.id}-${index}`}
					todo={todo}
					onDelete={handleOnDelete}
					onView={handleOnView}
				/>
			))}
		</div>
	)
}

export default TodoBoard
