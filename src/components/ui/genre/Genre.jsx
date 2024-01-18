import React from 'react'
import styles from './Genre.module.scss'

const Genre = ({ genre }) => {
	return (
		<div className={styles.itemText}>
			<span>{genre.name}</span>
		</div>
	)
}

export default Genre
