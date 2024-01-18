import React from 'react'
import styles from './InfoSubscribe.module.scss'
import Container from '../../ui/container/Container'
import Title from '../../ui/title/Title'
import Button from '../../ui/button/Button'
import img from '/images/bigPoster/the-batman.jpeg'
import cn from 'classnames'

const InfoSubscribe = ({ classStyle }) => {
	return (
		<div className={styles.subscribe}>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<h3 className={styles.title}>
							Subscribe adn watch movies and TV shows <br /> on all devices
						</h3>
						<p className={styles.text}>
							The app is available for iOS, Android, Smart TV and set-top boxes
						</p>
						<Button text={'Try 30 days for free'} />
					</div>
					<div className={styles.image}>
						<img src={img} alt='' />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default InfoSubscribe
