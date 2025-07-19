import TodoCard from './Card'

const TodoBoard = props => {
	const { todos, onDelete } = props
	const handleOnDelete = async domIndex => {
		onDelete?.(domIndex)
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{todos.map((todo, index) => (
				<TodoCard
					key={todo.id}
					todo={todo}
					onDelete={() => handleOnDelete(index)}
				/>
			))}
		</div>
	)
}

export default TodoBoard
