const TodoCard = ({ todo }) => {
	return (
		<div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm dark:shadow-none p-5 flex items-center gap-4 transition hover:shadow-lg dark:hover:shadow-slate-900/20">
			<div className="flex-1">
				<div className="text-md font-semibold text-gray-900 dark:text-white break-words whitespace-pre-line">
					{todo.title}
				</div>
				{todo.description && (
					<div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
						{todo.description}
					</div>
				)}
			</div>

			{todo.completed !== undefined && (
				<span
					className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
						todo.completed
							? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
							: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
					}`}
				>
					{todo.completed ? 'Done' : 'Pending'}
				</span>
			)}
		</div>
	)
}

export default TodoCard
