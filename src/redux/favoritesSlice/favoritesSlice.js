import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
	name: '@@ favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, action) => {
			// const isExists = state.some(item => item.id === action.payload.id)
			// if (isExists) return
			state.push(action.payload)
			// if (isExists) {
			// 	const index = state.findIndex(item => item.id === action.payload.id)
			// 	if (index !== -1) {
			// 		state.splice(index, 1)
			// 	}
			// } else state.push(action.payload)
		},
		removeFavorites: (state, action) => {
			const isItemsInCart = state.some(item => item.id === action.payload)
			if (isItemsInCart) return state.filter(item => item.id !== action.payload)
			// const isExists = state.some(item => item.id === action.payload)
			// if (isExists) return
			// state = state.filter(item => item.id !== action.payload.id)
		}
	}
})

export const { toggleFavorites, removeFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
