import React from 'react'
import styles from './About.module.scss'
import Container from '../../ui/container/Container'

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.image}>
						<div className={styles.shadow} />
						<img src='/images/about/1.jpg' alt='' />
					</div>
					<div className={styles.info}>
						<div className={styles.number}>680+</div>
						<div className={styles.name}>Serials</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<div className={styles.shadow} />
						<img src='/images/about/2.jpg' alt='' />
					</div>
					<div className={styles.info}>
						<div className={styles.number}>2300+</div>
						<div className={styles.name}>Movies</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<div className={styles.shadow} />
						<img src='/images/about/3.jpg' alt='' />
					</div>
					<div className={styles.info}>
						<div className={styles.number}>1700+</div>
						<div className={styles.name}>Cartoons</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
