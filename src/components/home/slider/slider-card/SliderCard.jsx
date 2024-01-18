import React from 'react'
import styles from '../SliderCustom.module.scss'
import { Link } from 'react-router-dom'
const SliderCard = ({ slide }) => {
	return (
		<Link
			to={`/movie/${slide.slug}/${slide.id}`}
			className={styles.slide}
			key={slide.id}
		>
			<img src={slide.bigPoster} alt={slide.title} />
			<div className={styles.info}>
				{slide.genres.map(genre => (
					<div key={genre.id}>{genre.name}</div>
				))}
				<div>{slide.year}</div>
				<div>{slide.age_limit}+</div>
			</div>
		</Link>
	)
}

export default SliderCard
