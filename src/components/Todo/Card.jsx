import { defaultDateFormat } from '../../helpers/date-time'

const TodoCard = props => {
	const { todo, onDelete, onView } = props

	const handleOnDelete = async event => {
		event.stopPropagation()
		onDelete?.(todo)
	}

	const handleOnView = async event => {
		event.stopPropagation()
		onView?.(todo)
	}

	return (
		<div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm dark:shadow-none p-5 flex flex-col gap-2 transition hover:shadow-lg dark:hover:shadow-slate-900/20 cursor-pointer relative">
			<div className="absolute top-2 right-2 flex items-center gap-1 z-10">
				<button
					type="button"
					className="material-icons text-gray-400 hover:text-blue-600 bg-transparent p-0 rounded transition text-xs w-6 h-6 flex items-center justify-center cursor-pointer"
					title="View"
					style={{ fontSize: '16px' }}
					onClick={handleOnView}
				>
					visibility
				</button>
				<button
					type="button"
					className="material-icons text-gray-400 hover:text-red-600 bg-transparent p-0 rounded transition text-xs w-6 h-6 flex items-center justify-center cursor-pointer"
					title="Delete"
					style={{ fontSize: '16px' }}
					onClick={handleOnDelete}
				>
					delete
				</button>
			</div>
			<div className="flex-1 pt-1">
				<div className="text-md font-semibold text-gray-900 dark:text-white break-words whitespace-pre-line">
					{todo?.title}
				</div>
				{todo?.description && (
					<div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
						{todo.description?.substring(0, 50)}
						{todo.description?.length > 50 && '...'}
					</div>
				)}
			</div>

			{(todo?.completed !== undefined || todo?.estimated_date) && (
				<div className="mt-2 flex items-center gap-2">
					{todo?.estimated_date && (
						<span className="inline-block px-2 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
							{defaultDateFormat(todo.estimated_date)}
						</span>
					)}
					{todo?.completed !== undefined && (
						<span
							className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
								todo.completed
									? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
									: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
							}`}
						>
							{todo.completed ? 'Done' : 'Incomplete'}
						</span>
					)}
				</div>
			)}
		</div>
	)
}

export default TodoCard
