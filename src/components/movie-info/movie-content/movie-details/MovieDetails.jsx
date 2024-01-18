import React from 'react'
import styles from './MovieDetails.module.scss'
import MovieItemDetail from './movie-item-detail/MovieItemDetail'

const MovieDetails = ({ item }) => {
	return (
		<div className={styles.details}>
			<div className={styles.items}>
				<MovieItemDetail item={item.year} title='Year' />
				<MovieItemDetail item={item.country} title='Country' />
				<MovieItemDetail item={item.time} title='Time' />
				<MovieItemDetail item={item.genres} title='Genres' />
			</div>
		</div>
	)
}

export default MovieDetails
