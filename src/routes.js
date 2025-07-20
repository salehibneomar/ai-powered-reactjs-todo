import DefaultLayout from './layouts/DefaultLayout'
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'

const routes = [
	{
		path: '/',
		Component: DefaultLayout,
		children: [
			{
				index: true,
				Component: IndexPage,
			},
			{
				path: 'info',
				Component: AboutPage,
			},
		],
	},
]

export default routes
