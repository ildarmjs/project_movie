import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MoviesService } from '../../services/movies.service'

export const serialApi = createApi({
	reducerPath: 'serialApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}/serials`
	}),
	endpoints: builder => ({
		getSerials: builder.query({
			query: () => `/`
		})
	})
})

export const { useGetSerialsQuery } = serialApi
