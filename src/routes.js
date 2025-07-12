import AboutPage from './pages/AboutPage'
import App from './App'
import DefaultLayout from './layouts/DefaultLayout'

const routes = [
	{
		path: '/',
		Component: DefaultLayout,
		children: [
			{
				index: true,
				Component: App,
			},
			{
				path: 'about',
				Component: AboutPage,
			},
		],
	},
]

export default routes
