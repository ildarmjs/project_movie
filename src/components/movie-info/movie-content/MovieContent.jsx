import React from 'react'
import styles from './MovieContent.module.scss'
import MovieRating from './movie-rating/MovieRating'
import MovieDetails from './movie-details/MovieDetails'

const MovieContent = ({ item, type }) => {
	return (
		<div className={styles.content}>
			<div className={styles.image}>
				<img src={item.poster} alt={item.slug} />
			</div>
			<MovieRating item={item} type={type} />
			<MovieDetails item={item} />
		</div>
	)
}

export default MovieContent
