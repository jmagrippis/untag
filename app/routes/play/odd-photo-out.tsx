import {useRouteData} from '@remix-run/react'
import type {MetaFunction} from '@remix-run/react'
import type {Loader} from '@remix-run/data'
import {getPhotos, Photo} from '../../api/unsplash/getPhotos'

export const meta: MetaFunction = () => ({
	title: 'Odd Photo Out! | Untag 📷',
	description:
		'See beautiful photos from Unsplash, pick the one that does NOT match the tag "TAG GOES HERE"!',
})

type RouteData = {tagged: Photo[]; notTagged: Photo[]}

export let loader: Loader = async () => {
	const query = 'dance'
	const photos = await getPhotos(query)

	return photos.reduce<RouteData>(
		(acc, photo) => {
			acc[
				photo.tags?.some((tag) => tag.title?.toLowerCase().includes(query))
					? 'tagged'
					: 'notTagged'
			].push(photo)

			return acc
		},
		{tagged: [], notTagged: []}
	)
}

const OddPhotoOut = () => {
	const {
		tagged,
		notTagged: [oddImage],
	} = useRouteData<RouteData>()

	return (
		<div>
			<h2>Odd photo out!</h2>
			<p>
				Select the photo that is <strong>NOT</strong> tagged{' '}
				<strong>DANCE</strong>
			</p>
			<ul>
				{tagged.map((image) => (
					<li key={image.id}>
						<img
							src={image.urls.small}
							alt={image.alt_description || undefined}
							title={image.description || undefined}
						/>
					</li>
				))}
				{oddImage ? (
					<li key={oddImage.id}>
						<img
							src={oddImage.urls.small}
							alt={oddImage.alt_description || undefined}
							title={oddImage.description || undefined}
						/>
					</li>
				) : null}
			</ul>
		</div>
	)
}

export default OddPhotoOut
