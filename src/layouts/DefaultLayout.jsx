import { useOutlet, Link } from 'react-router'

const DefaultLayout = () => {
	const outlet = useOutlet()
	const year = new Date().getFullYear()
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900">
			<nav className="w-full bg-white/80 dark:bg-slate-800/80 shadow-sm border-b border-gray-200 dark:border-slate-700 backdrop-blur sticky top-0 z-10">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight select-none"
						>
							AIP-Todo
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<Link
							to="/info"
							className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Info
						</Link>
					</div>
				</div>
			</nav>

			<main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
				{outlet}
			</main>

			<footer className="w-full bg-white/80 dark:bg-slate-800/80 border-t border-gray-200 dark:border-slate-700 py-4 mt-8">
				<div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
					&copy; {year} AIP-Todo. All rights reserved.
				</div>
			</footer>
		</div>
	)
}

export default DefaultLayout
