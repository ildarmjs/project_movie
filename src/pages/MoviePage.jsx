import React from 'react'
import MovieInfo from '../components/movie-info/MovieInfo'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
	const { type, id } = useParams()

	// return <MovieInfo movieName={name} category='movies' />
	return type === 'movie' ? (
		<MovieInfo movieId={id} category={'movies'} type={type} />
	) : type === 'serial' ? (
		<MovieInfo movieId={id} category={'serials'} type={type} />
	) : type === 'cartoon' ? (
		<MovieInfo movieId={id} category={'cartoons'} type={type} />
	) : (
		''
	)
}

export default MoviePage
