import React from 'react'
import Slider from 'react-slick'
// import './carousel-theme.scss'
// import './carousel.scss'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import styles from './CarouselCustom.module.scss'

const CarouselCustom = ({
	children,
	slidesToShow,
	slidesToShowBreakPoints
}) => {
	let settings = {
		// className: 'carousel-slider',
		dots: false,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		// initialSlide: 0,
		arrows: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 5000,
		cssEase: 'ease-out',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: slidesToShowBreakPoints,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			}
			// {
			// 	breakpoint: 600,
			// 	settings: {
			// 		slidesToShow: 2,
			// 		slidesToScroll: 2,
			// 		initialSlide: 2
			// 	}
			// },
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1
			// 	}
			// }
		]
	}
	return <Slider {...settings}>{children}</Slider>
}

export default CarouselCustom
