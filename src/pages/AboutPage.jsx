const AboutPage = () => {
	return (
		<div className="max-w-3xl mx-auto py-10 px-4">
			<div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-slate-700">
				<h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
					About AIP-Todo
				</h1>
				<p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
					AI-powered productivity, modern UI, and seamless experience.
				</p>
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
						Developer
					</h2>
					<div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2">
						<span className="font-medium text-gray-800 dark:text-gray-200">
							Saleh Ibne Omar
						</span>
						<a
							href="https://github.com/salehibneomar"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
						>
							Github
						</a>
						<a
							href="https://www.linkedin.com/in/salehibneomar/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
						>
							LinkedIn
						</a>
					</div>
				</div>
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
						Project Overview
					</h2>
					<p className="text-gray-700 dark:text-gray-300 mb-2">
						<span className="font-semibold text-blue-600 dark:text-blue-400">
							AIP-Todo
						</span>{' '}
						is a modern, AI-powered todo application that helps you
						generate, organize, and manage your tasks efficiently.
						The app features a beautiful, responsive UI and a
						seamless user experience.
					</p>
					<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-2">
						<li>
							AI-powered todo generation using Google Gemini LLM (
							<span className="font-semibold">
								gemini-2.5.flash-lite
							</span>
							) with a custom prompt for title, description, and
							estimated date.
						</li>
						<li>
							Basic CRUD operations: create, view, edit, and
							delete todos.
						</li>
						<li>
							Todos are sorted by completion status (incomplete
							first) and latest estimated date.
						</li>
						<li>
							Modern UI/UX with Tailwind CSS and dark mode
							support.
						</li>
						<li>
							Best practices: Zustand selector pattern, React
							memoization, and logic optimization.
						</li>
						<li>
							Uses React Router v7's{' '}
							<code>createBrowserRouter</code> for layout and page
							routing, and the <code>useOutlet</code> hook to
							display child components as pages from the Default
							Layout.
						</li>
						<li>
							IndexedDB for local storage; no backend required.
						</li>
						<li>
							Vercel serverless functions are used to securely
							proxy the Google AI API.
						</li>
					</ul>
				</div>
				<div className="mb-8">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
						Technologies Used
					</h2>
					<div className="flex flex-wrap gap-3">
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							React
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							React Router v7
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							Tailwind CSS
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							Zustand
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							IndexedDB
						</span>
						<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">
							Google Gemini LLM
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
