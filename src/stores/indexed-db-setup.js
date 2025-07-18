import { createStore, get, set, del } from 'idb-keyval'

const dbName = 'aipTodoApp'
const tableName = 'aipTodo'
const storeName = createStore(dbName, tableName)

const indexedDbSetup = {
	getItem: async name => await get(name, storeName),
	setItem: async (name, value) => await set(name, value, storeName),
	removeItem: async name => await del(name, storeName),
}

export default indexedDbSetup
