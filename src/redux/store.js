import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import { serialApi } from './api/serialsApi'
import authSlice from './authSlice/auth.slice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		[movieApi.reducerPath]: movieApi.reducer,
		[serialApi.reducerPath]: serialApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(movieApi.middleware, serialApi.middleware)
})
