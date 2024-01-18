import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://44491f98408701ba.mokky.dev/movies`
	}),
	endpoints: builder => ({
		getMovies: builder.query({ query: () => '/' }),
		getMovieById: builder.query({ query: movieId => `/${movieId}` })
	})
})

export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi
