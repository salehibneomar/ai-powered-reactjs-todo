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
			deleteTodo: async domIndex => {
				set(state => {
					const todos = [...state.todos]
					todos.splice(domIndex, 1)
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
