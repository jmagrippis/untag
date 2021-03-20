import type {MetaFunction, LinksFunction} from '@remix-run/react'
import {Link} from 'react-router-dom'

import styles from 'url:../styles/index.css'

export let meta: MetaFunction = () => {
	return {
		title: 'Untag',
		description:
			'A variety of games based on beautiful Unsplash pictures, and their tags!',
	}
}

export let links: LinksFunction = () => {
	return [{rel: 'stylesheet', href: styles}]
}

export default function Index() {
	return <Link to="/play">Play!</Link>
}
