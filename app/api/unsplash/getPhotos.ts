import {Basic} from 'unsplash-js/dist/methods/photos/types'
import {unsplashClient} from './client'

export interface Photo extends Basic {
	tags?: {title?: string}[]
}

export const getPhotos = async (query: string): Promise<Photo[]> => {
	const {errors, response} = await unsplashClient.search.getPhotos({
		query,
		orientation: 'squarish',
	})

	if (errors || !response) {
		console.error(errors)
		throw new Error('There was an error fetching photos')
	}

	return response.results as Photo[]
}
