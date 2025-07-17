import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodoStore = create(
	persist(
		set => ({
			todos: [],
			addTodo: async todo => {
				set(state => ({
					todos: [todo, ...state.todos],
				}))
			},
		}),
		{
			name: 'todo-storage',
		}
	)
)
