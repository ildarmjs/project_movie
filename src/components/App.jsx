import { useState } from 'react'
import HomePage from '../pages/HomePage'
import { Routes, Route, Link } from 'react-router-dom'
import MoviePage from '../pages/MoviePage'
import LoginPage from '../pages/LoginPage'
import AllSerialsPage from '../pages/AllSerialsPage'
import AllMoviesPage from '../pages/AllMoviesPage'
import AllCartoonsPage from '../pages/AllCartoonsPage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:type/:name/:id' element={<MoviePage />} />
				<Route path='/:type' element={<LoginPage />} />
				<Route path='/serials' element={<AllSerialsPage />} />
				<Route path='/movies' element={<AllMoviesPage />} />
				<Route path='/cartoons' element={<AllCartoonsPage />} />
			</Routes>
		</>
	)
}

export default App
