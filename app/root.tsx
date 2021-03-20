import type {LinksFunction, LoaderFunction} from '@remix-run/react'
import {Meta, Links, Scripts} from '@remix-run/react'
import {Outlet} from 'react-router-dom'

import styles from 'url:./styles/global.css'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'

export let links: LinksFunction = () => {
	return [{rel: 'stylesheet', href: styles}]
}

export let loader: LoaderFunction = () => {
	return {date: new Date()}
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<Outlet />
				<Footer />
				<Scripts />
			</body>
		</html>
	)
}

export function ErrorBoundary({error}: {error: Error}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>Whoops!</title>
			</head>
			<body>
				<div>
					<h1>There was an error!</h1>
					<pre>{error.message}</pre>
					<p>
						This site is still under development, thanks for understanding 😅
					</p>
				</div>

				<Scripts />
			</body>
		</html>
	)
}
