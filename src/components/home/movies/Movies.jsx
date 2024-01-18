import React from 'react'
import styles from './Movies.module.scss'
import Title from '../../ui/title/Title'
import { useGetMoviesQuery } from '../../../redux/api/movieApi'
import Card from '../../ui/card/Card'
import CarouselCustom from '../../ui/carousel-custom/CarouselCustom'

const Movies = () => {
	const { data, error, isLoading } = useGetMoviesQuery()

	return (
		<div className={styles.movies}>
			<Title title='We recommend movies' />

			{/* <div className={styles.items}> */}
			<CarouselCustom>
				{data?.slice(0, 5).map(item => (
					<Card item={item} key={item.id} isLoading={isLoading} type='movie' />
				))}
			</CarouselCustom>
			{/* </div> */}
		</div>
	)
}

export default Movies
