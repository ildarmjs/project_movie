import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}/movies`
	}),
	endpoints: builder => ({
		getMovies: builder.query({ query: () => '/' }),
		getMovieById: builder.query({ query: movieId => `/${movieId}` })
	})
})

export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi
