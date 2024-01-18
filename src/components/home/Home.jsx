import React from 'react'
import Layout from '../layout/Layout'
import styles from './Home.module.scss'
import Container from '../ui/container/Container'
import SliderCustom from './slider/SliderCustom'
import About from './about/About'
import Movies from './movies/Movies'
import Serials from './serials/Serials'
import InfoSubscribe from './info-subscribe/InfoSubscribe'

const Home = () => {
	return (
		<Layout>
			<div className={styles.home}>
				<Container>
					<SliderCustom />
					<About />
					<Movies />
					<Serials />
				</Container>
				<InfoSubscribe />
			</div>
		</Layout>
	)
}

export default Home
