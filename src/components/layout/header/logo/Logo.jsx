import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
const Logo = () => {
	return (
		<Link to='/' className={styles.logo}>
			<div>M</div>
			<FaPlayCircle color='#a43dff' size={28} />
			<div>VIE</div>
		</Link>
	)
}

export default Logo
