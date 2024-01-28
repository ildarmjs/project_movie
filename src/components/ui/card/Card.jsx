import React, { useContext, useEffect } from 'react'
import styles from './Card.module.scss'
import SkeletonLoader from '../skeleton-loader/SkeletonLoader'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeFavorites,
	toggleFavorites
} from '../../../redux/favoritesSlice/favoritesSlice'
import axios from 'axios'
import { AuthContext } from '../../../utils/AuthContext'

const Card = ({
	item,
	isLoading,
	type,
	serialCardStyle,
	serialTitleStyle,
	serialPriceStyle,
	serialRatingStyle
}) => {
	const { user, setUser } = useContext(AuthContext)
	const dispatch = useDispatch()
	const favorites = useSelector(state => state.favorites)
	const isExists = favorites.some(favorite => favorite.id === item.id)
	const handleToggleFavorites = () => {
		if (!user.email.length) {
			alert('Необходимо войти в аккаунт или зарегестрироваться!')
		} else {
			if (isExists) {
				dispatch(removeFavorites(item.id))
			} else {
				dispatch(toggleFavorites(item))
			}
		}
	}
	useEffect(() => {
		// setUser(prev => ({ ...prev, favoritesFilm: [...favorites] }))
		axios
			.patch(`${import.meta.env.VITE_BASE_URL}/users/${user.id}`, {
				favoritesFilm: [...favorites]
			})
			.then(({ data }) => {
				setUser(data)
				localStorage.setItem('user', JSON.stringify(data))
			})
	}, [favorites])
	return isLoading ? (
		<div className={styles.loader}>
			<SkeletonLoader count={1} className={styles.skeleton_loader} />
		</div>
	) : (
		<div className={classnames(styles.card, serialCardStyle)}>
			<div className={styles.poster}>
				<Link to={`/${type}/${item.slug}/${item.id}`}>
					<img src={item.poster} alt={item.title} />
				</Link>

				<div className={classnames(styles.rating, serialRatingStyle)}>
					{item.rating}
				</div>
				{user.email.length ? (
					<div className={styles.favorites} onClick={handleToggleFavorites}>
						{isExists ? <IoMdHeart size={24} /> : <IoMdHeartEmpty size={24} />}
					</div>
				) : (
					<div className={styles.favorites} onClick={handleToggleFavorites}>
						<IoMdHeartEmpty size={24} />
					</div>
				)}
			</div>
			<h4 className={classnames(styles.title, serialTitleStyle)}>
				{item.title}
			</h4>
			<div className={classnames(styles.price, serialPriceStyle)}>
				{item.price}
			</div>
		</div>
	)
}

export default Card
