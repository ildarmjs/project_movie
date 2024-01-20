import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const authUser = createAsyncThunk(
	'post/authUser',
	async (payload, { rejectWithValue }) => {
		try {
			const { user, params } = payload
			const res = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/${params}`,
				user
			)

			if (res.status !== 201 && params === 'register')
				throw new Error('Ошибка при создании')

			if (res.status !== 200 && params === 'auth')
				throw new Error('Ошибка при входе')

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const initialState = {
	user: null,
	status: 'Idle',
	error: null,
	token: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(authUser.pending, state => {
			state.status = 'Loading'
			state.error = null
			state.token = null
		})
		builder.addCase(authUser.fulfilled, (state, { payload }) => {
			state.status = 'Connect'
			state.token = payload.accessToken
			state.user = payload.user
		})
		builder.addCase(authUser.rejected, (state, { payload }) => {
			state.status = error
			state.error = payload
		})
	}
})
export default authSlice.reducer
