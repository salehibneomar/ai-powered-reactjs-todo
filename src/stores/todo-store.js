import { create } from 'zustand'

export const useTodoStore = create(set => ({
	todos: [],
	addTodo: async todo => {
		set(state => {
			return {
				todos: [todo, ...state.todos],
			}
		})
	},
}))
