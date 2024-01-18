import React from 'react'
import styles from './Button.module.scss'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, type, emailLength, handleClick }) => {
	const navigate = useNavigate()

	return emailLength ? (
		<div onClick={handleClick} className={styles.buttonSignIn}>
			{text}
		</div>
	) : (
		<div
			onClick={() => navigate(`/${type}`)}
			className={text === 'Sign In' ? styles.buttonSignIn : styles.button}
		>
			{text}
		</div>
	)
}

export default Button
