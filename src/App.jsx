import TodoBoard from './components/Todo/Board'
import CreateTodo from './components/Todo/Create'

const App = () => {
	const todo = [
		{
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: false,
		},
		{
			userId: 1,
			id: 2,
			title: 'quis ut nam facilis et officia qui',
			completed: false,
		},
		{
			userId: 1,
			id: 3,
			title: 'fugiat veniam minus',
			completed: false,
		},
		{
			userId: 1,
			id: 4,
			title: 'et porro tempora',
			completed: true,
		},
		{
			userId: 1,
			id: 5,
			title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
			completed: false,
		},
	]

	return (
		<div className="grid grid-cols-12 gap-y-8 gap-x-0 w-full">
			<div className="col-span-12">
				<CreateTodo />
			</div>
			<div className="col-span-12">
				<TodoBoard todos={todo} />
			</div>
		</div>
	)
}

export default App
