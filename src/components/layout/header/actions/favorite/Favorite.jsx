import React from 'react'
import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoMdHeart } from 'react-icons/io'
const Favorite = () => {
	const favorites = useSelector(state => state.favorites)
	const quantity = favorites.length
	return (
		<NavLink
			to='/favorites'
			className={({ isActive }) =>
				isActive ? styles.favoriteActive : styles.favorite
			}
		>
			<IoMdHeart className={styles.icon} />
			<span>{quantity ? quantity : ''}</span>
		</NavLink>
	)
}

export default Favorite
