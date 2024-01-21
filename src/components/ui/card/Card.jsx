import React from 'react'
import styles from './Card.module.scss'
import SkeletonLoader from '../skeleton-loader/SkeletonLoader'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Card = ({
	item,
	isLoading,
	type,
	serialCardStyle,
	serialTitleStyle,
	serialPriceStyle,
	serialRatingStyle
}) => {
	return isLoading ? (
		<div className={styles.loader}>
			<SkeletonLoader count={1} className={styles.skeleton_loader} />
		</div>
	) : (
		<Link
			to={`/${type}/${item.slug}/${item.id}`}
			className={classnames(styles.card, serialCardStyle)}
		>
			<div className={styles.poster}>
				<img src={item.poster} alt={item.title} />
				<div className={classnames(styles.rating, serialRatingStyle)}>
					{item.rating}
				</div>
			</div>
			<h4 className={classnames(styles.title, serialTitleStyle)}>
				{item.title}
			</h4>
			<div className={classnames(styles.price, serialPriceStyle)}>
				{item.price}
			</div>
		</Link>
	)
}

export default Card
