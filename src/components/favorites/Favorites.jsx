import React, { useEffect } from 'react'
import styles from './Favorites.module.scss'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import { useSelector } from 'react-redux'
import Card from '../ui/card/Card'
import { useContext } from 'react'
import { AuthContext } from '../../utils/AuthContext'

const Favorites = () => {
	const { setUser } = useContext(AuthContext)
	const favorites = useSelector(state => state.favorites)
	console.log(favorites)

	// setUser(prev => ({ ...prev, favoritesFilm: [...favorites] }))
	return (
		<Layout>
			<div className={styles.favorites}>
				<Container>
					<h4>Favorites movies</h4>
					<div className={styles.items}>
						{favorites.map(item => (
							<Card item={item} type={item.type} key={item.id} />
						))}
					</div>
				</Container>
			</div>
		</Layout>
	)
}

export default Favorites
