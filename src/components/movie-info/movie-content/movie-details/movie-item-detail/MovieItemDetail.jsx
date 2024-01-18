import React from 'react'
import styles from './MovieItemDetail.module.scss'
import Genre from '../../../../ui/genre/Genre'

const MovieItemDetail = ({ item, title }) => {
	return (
		<div className={styles.item}>
			<div className={styles.itemTitle}>{title}</div>
			{title === 'Genres' ? (
				item.map(genre => <Genre genre={genre} key={genre.id} />)
			) : (
				<div className={styles.itemText}>{item}</div>
			)}
		</div>
	)
}

export default MovieItemDetail
