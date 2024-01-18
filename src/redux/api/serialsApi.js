import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MoviesService } from '../../services/movies.service'

export const serialApi = createApi({
	reducerPath: 'serialApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://44491f98408701ba.mokky.dev/`
	}),
	endpoints: builder => ({
		getSerials: builder.query({
			query: (page = 1, sort = '', limit = 4) =>
				`/serials?page=${page}&limit=${limit}&sortBy=${sort}`
		})
	})
})

export const { useGetSerialsQuery } = serialApi
