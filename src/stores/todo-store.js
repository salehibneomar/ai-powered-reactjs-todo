import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import indexedDbSetup from './indexed-db-setup'

export const useTodoStore = create(
	persist(
		set => ({
			todos: [],
			addTodo: async todo => {
				set(state => ({
					todos: [todo, ...state.todos],
				}))
			},
			updateTodo: async (id, updatedTodo) => {
				set(state => {
					const todos = state.todos?.map(todo =>
						+todo.id === +id ? { ...todo, ...updatedTodo } : todo
					)
					return { todos }
				})
			},
			deleteTodo: async id => {
				set(state => {
					const todos = state.todos?.filter(todo => +todo.id !== +id)
					return { todos }
				})
			},
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => indexedDbSetup),
			partialize: state => ({ todos: state.todos }),
		}
	)
)
