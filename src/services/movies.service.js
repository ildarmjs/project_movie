import axios from 'axios'

export const MoviesService = {
	async getAll(category) {
		return await axios.get(`${import.meta.env.VITE_BASE_URL}/${category}`)
	},
	async getOneMovie(id, category) {
		return await axios.get(`${import.meta.env.VITE_BASE_URL}/${category}/${id}`)
	},
	async getMovieSimilar(slug, category) {
		return await axios.get(
			`${import.meta.env.VITE_BASE_URL}/${category}?genres.slug=${slug}`
		)
	},
	async searchMovie(title) {
		return await axios.get(
			`${import.meta.env.VITE_BASE_URL}/movies?title=*${title}`
		)
	},
	async getSerialsPaginationAndSorting(
		category,
		page = 1,
		sort = '',
		limit = 4
	) {
		return await axios.get(
			`${
				import.meta.env.VITE_BASE_URL
			}/${category}?page=${page}&limit=${limit}&sortBy=${sort}`
		)
	}
}
