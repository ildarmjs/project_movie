import React, { useLayoutEffect, useRef } from 'react'
import styles from './Serials.module.scss'
import Title from '../../ui/title/Title'
import Card from '../../ui/card/Card'
import { useGetSerialsQuery } from '../../../redux/api/serialsApi'
import CarouselCustom from '../../ui/carousel-custom/CarouselCustom'

const Serials = () => {
	const { data, error, isLoading } = useGetSerialsQuery()

	return (
		<div className={styles.movies}>
			<Title title='We recommend serials' />

			{/* <div className={styles.items}> */}
			<CarouselCustom slidesToShow={4} slidesToShowBreakPoints={3}>
				{data?.slice(0, 5).map(item => (
					<Card item={item} key={item.id} isLoading={isLoading} type='serial' />
				))}
			</CarouselCustom>
			{/* </div> */}
		</div>
	)
}

export default Serials
