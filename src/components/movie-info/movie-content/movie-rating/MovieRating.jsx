import React from 'react'
import styles from './MovieRating.module.scss'

const MovieRating = ({ item, type }) => {
	return (
		<div className={styles.rating}>
			<div className={styles.rate}>{item.rating}</div>
			<div className={styles.content}>
				<div className={styles.subtitle}>Rating from {type}</div>
				<div className={styles.text}>Estimate</div>
			</div>
		</div>
	)
}

export default MovieRating
