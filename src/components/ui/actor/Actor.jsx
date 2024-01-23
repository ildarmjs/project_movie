import React from 'react'
import styles from './Actor.module.scss'

const Actor = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.actor}>
				<img src={item.photo} alt={item.name} />
			</div>
			<div className={styles.name}>{item.name}</div>
		</div>
	)
}

export default Actor
