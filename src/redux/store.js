import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import { serialApi } from './api/serialsApi'
import authSlice from './authSlice/auth.slice'
import favoritesSlice from './favoritesSlice/favoritesSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		favorites: favoritesSlice,
		[movieApi.reducerPath]: movieApi.reducer,
		[serialApi.reducerPath]: serialApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(movieApi.middleware, serialApi.middleware)
})
