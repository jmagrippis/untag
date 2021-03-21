import type {
	MetaFunction,
	LinksFunction,
	HeadersFunction,
} from '@remix-run/react'
import {Link} from 'react-router-dom'

import styles from 'url:../styles/index.css'
import {RoutePath} from '../utils/routes'

export const meta: MetaFunction = () => ({
	title: 'Untag 📷',
	description:
		'A variety of games based on beautiful Unsplash pictures, and their tags!',
})

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}]

export const headers: HeadersFunction = () => ({
	'Cache-Control': 'public, max-age=3600, s-maxage=7200',
})

export default function Index() {
	return <Link to={RoutePath.OddPhotoOut}>Play!</Link>
}
