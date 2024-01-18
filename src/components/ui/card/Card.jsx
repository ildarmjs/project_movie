import React from 'react'
import styles from './Card.module.scss'
import SkeletonLoader from '../skeleton-loader/SkeletonLoader'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Card = ({ item, isLoading, type, className }) => {
	return isLoading ? (
		<div className={styles.loader}>
			<SkeletonLoader count={1} className={styles.skeleton_loader} />
		</div>
	) : (
		<Link
			to={`/${type}/${item.slug}/${item.id}`}
			className={classnames(styles.card, className)}
		>
			<div className={styles.poster}>
				<img src={item.poster} alt={item.title} />
				<div className={styles.rating}>{item.rating}</div>
			</div>
			<h4 className={styles.title}>{item.title}</h4>
			<div className={styles.price}>{item.price}</div>
		</Link>
	)
}

export default Card
