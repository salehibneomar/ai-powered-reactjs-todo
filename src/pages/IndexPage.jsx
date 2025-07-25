import { useMemo, useCallback, Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { sortBy } from 'lodash'
import { toastify } from '../utils/toastify'
import { sweetalertModal } from '../utils/sweetalert-modal'
import { defaultDateFormat } from '../helpers/date-time'

import todoService from '../services/todo-service'
import { useTodoStore } from '../stores/todo-store'

import TodoBoard from '../components/Todo/Board'
import CreateTodo from '../components/Todo/Create'

const IndexPage = () => {
	const todosRaw = useTodoStore(state => state.todos)
	const { addTodo, updateTodo, deleteTodo } = useTodoStore()

	const todos = useMemo(
		() => sortBy(todosRaw, ['completed', 'estimated_date']),
		[todosRaw]
	)

	const handleTodoCreation = useCallback(
		async payload => {
			if (payload) {
				const data = await todoService.generateTodo(payload)
				if (!data) {
					toastify(
						'Failed to generate todo. Please try again.!',
						'error'
					)
				} else {
					const newTodo = {
						...data,
						completed: false,
						id: uuidv4(),
					}
					await addTodo(newTodo)
					toastify('Todo generated successfully!')
				}
			}
		},
		[addTodo]
	)

	const handleTodoEdit = useCallback(
		async todo => {
			let formData = {
				title: todo.title || '',
				description: todo.description || '',
				estimated_date: todo.estimated_date || '',
				completed: todo.completed || false,
			}

			const handleInputChange = event => {
				const { name, value, type, checked } = event.target
				formData = {
					...formData,
					[name]: type === 'checkbox' ? checked : value,
				}
			}

			await sweetalertModal({
				html: (
					<form id="edit-todo-form" className="space-y-4 pt-4">
						<div className="text-left">
							<label className="block text-md font-medium mb-1">
								Title
							</label>
							<input
								type="text"
								name="title"
								defaultValue={formData.title}
								className="w-full px-2 py-1 border rounded"
								onChange={handleInputChange}
							/>
						</div>
						<div className="text-left">
							<label className="block text-md font-medium mb-1">
								Description
							</label>
							<textarea
								name="description"
								defaultValue={formData.description}
								className="w-full px-2 py-1 border rounded"
								rows="10"
								onChange={handleInputChange}
							/>
						</div>
						<div className="text-left">
							<label className="block text-md font-medium mb-1">
								Estimated Date
							</label>
							<input
								type="date"
								name="estimated_date"
								defaultValue={formData.estimated_date}
								className="w-full px-2 py-1 border rounded"
								onChange={handleInputChange}
							/>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								name="completed"
								defaultChecked={formData.completed}
								className="mr-2"
								onChange={handleInputChange}
								id="completed-checkbox"
							/>
							<label
								className="text-md"
								htmlFor="completed-checkbox"
							>
								Completed
							</label>
						</div>
					</form>
				),
				showConfirmButton: true,
				confirmButtonText: 'Save',
				confirmButtonColor: '#2563eb',
			}).then(async result => {
				if (result.isConfirmed) {
					await updateTodo(todo.id, formData)
					toastify('Todo updated successfully!')
				}
			})
		},
		[updateTodo]
	)

	const handleTodoView = useCallback(
		async todo => {
			await sweetalertModal({
				html: (
					<>
						<h2 className="text-xl font-semibold mb-3 text-center">
							{todo?.title}
						</h2>
						<hr />
						<p className="mb-3 mt-2 text-justify">
							<span className="font-semibold">Description:</span>
							<br />
							<span>{todo?.description || 'N/A'}</span>
						</p>
						<hr />
						<p className="mt-2">
							<span className="font-semibold">
								Estimated Date:{' '}
							</span>
							{todo?.estimated_date
								? defaultDateFormat(todo.estimated_date)
								: 'N/A'}
						</p>
					</>
				),
				showConfirmButton: true,
				confirmButtonColor: '#2563eb',
				confirmButtonText: 'Edit',
			}).then(async result => {
				if (result.isConfirmed) {
					handleTodoEdit(todo)
				}
			})
		},
		[handleTodoEdit]
	)

	const handleTodoDeletion = useCallback(
		async todo => {
			await sweetalertModal({
				title: 'Are you sure?',
				text: 'You are about to delete this todo.',
				icon: 'warning',
				showConfirmButton: true,
				showCancelButton: true,
				confirmButtonColor: '#dc2626',
				cancelButtonColor: '#2563eb',
				confirmButtonText: 'Okay',
			}).then(async result => {
				if (result.isConfirmed) {
					await deleteTodo(todo.id)
					toastify('Todo deleted successfully!')
				}
			})
		},
		[deleteTodo]
	)

	const handleToggleStatus = useCallback(
		async todo => {
			await updateTodo(todo.id, { completed: !todo.completed })
			toastify('Todo status updated successfully!')
		},
		[updateTodo]
	)

	return (
		<>
			<div className="grid grid-cols-12 gap-y-8 gap-x-0 w-full">
				<div className="col-span-12">
					<CreateTodo onTodoCreation={handleTodoCreation} />
				</div>
				<div className="col-span-12">
					{todos.length ? (
						<Suspense fallback={<div>Loading todos...</div>}>
							<TodoBoard
								todos={todos}
								onDelete={handleTodoDeletion}
								onView={handleTodoView}
								onToggleStatus={handleToggleStatus}
							/>
						</Suspense>
					) : (
						<div className="text-center text-gray-500">
							No Data Found!
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default IndexPage
