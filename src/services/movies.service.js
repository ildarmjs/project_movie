import axios from 'axios'

export const MoviesService = {
	async getAll(category) {
		return await axios.get(`https://44491f98408701ba.mokky.dev/${category}`)
	},
	async getOneMovie(id, category) {
		return await axios.get(
			`https://44491f98408701ba.mokky.dev/${category}/${id}`
		)
	},
	async getMovieSimilar(slug, category) {
		return await axios.get(
			`https://44491f98408701ba.mokky.dev/${category}?genres.slug=${slug}`
		)
	},
	async searchMovie(title) {
		return await axios.get(
			`https://44491f98408701ba.mokky.dev/movies?title=*${title}`
		)
	},
	async getSerialsPaginationAndSorting(
		category,
		page = 1,
		sort = '',
		limit = 4
	) {
		return await axios.get(
			`https://44491f98408701ba.mokky.dev/${category}?page=${page}&limit=${limit}&sortBy=${sort}`
		)
	}
}
