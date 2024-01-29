import React from 'react'
import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdHeart } from 'react-icons/io'
const Favorite = () => {
	const favorites = useSelector(state => state.favorites)
	const quantity = favorites.length
	return (
		<Link to='/favorites' className={styles.favorite}>
			<IoMdHeart className={styles.icon} />
			<span>{quantity ? quantity : ''}</span>
		</Link>
	)
}

export default Favorite
