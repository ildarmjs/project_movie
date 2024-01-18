import React from 'react'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<nav>
				<ul className={styles.list}>
					<li>
						<Link to='/serials'>Serials</Link>
					</li>
					<li>
						<Link to='/movies'>Movies</Link>
					</li>
					<li>
						<Link to='/cartoons'>Cartoons</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
