import React from 'react'
import styles from './ButtonUpload.module.scss'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
const ButtonUpload = ({ text }) => {
	return (
		<button className={styles.button}>
			{text === 'Google Play' ? (
				<FaGooglePlay color='#cdcdd1' size={32} />
			) : (
				<FaApple color='#cdcdd1' size={32} />
			)}

			<div className={styles.info}>
				<span className={styles.subtitle}>Upload to</span>
				<span className={styles.title}>{text}</span>
			</div>
		</button>
	)
}

export default ButtonUpload
