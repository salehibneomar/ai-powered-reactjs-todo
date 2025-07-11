import AboutPage from './pages/AboutPage'
import App from './App'

const routes = [
	{
		path: '/about',
		name: 'About',
		Component: AboutPage,
	},
	{
		path: '/',
		name: 'Home',
		Component: App,
	},
]

export default routes
