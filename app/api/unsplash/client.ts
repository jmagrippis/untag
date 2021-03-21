import {createApi} from 'unsplash-js'

if (!process.env.UNSPLASH_ACCESS_KEY) {
	throw new Error('No UNSPLASH_ACCESS_KEY defined!')
}

export const unsplashClient = createApi({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
})
