import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import styles from './SliderCustom.module.scss'
import './slick.scss'
import './slick-theme.scss'
import axios from 'axios'
import SliderCard from './slider-card/SliderCard'
import { MoviesService } from '../../../services/movies.service'
import SkeletonLoader from '../../ui/skeleton-loader/SkeletonLoader'

const SliderCustom = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true
	}

	const [sliders, setSliders] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		async function getImagesSlider() {
			setIsLoading(true)
			const { data } = await MoviesService.getAll('movies')

			setSliders(data)
			setIsLoading(false)
		}
		getImagesSlider()
	}, [])

	return (
		// <div>
		isLoading ? (
			<div>
				<SkeletonLoader count={1} className={styles.slider_loader} />
			</div>
		) : (
			<Slider {...settings}>
				{sliders.map(slide => (
					<SliderCard slide={slide} key={slide.id} />
				))}
			</Slider>
		)
		// </div>
	)
}

export default SliderCustom
