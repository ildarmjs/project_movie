import React from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<nav>
				<ul className={styles.list}>
					<li>
						<NavLink
							to='/serials'
							className={({ isActive }) =>
								isActive ? styles.linkActive : styles.link
							}
						>
							Serials
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/movies'
							className={({ isActive }) =>
								isActive ? styles.linkActive : styles.link
							}
						>
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/cartoons'
							className={({ isActive }) =>
								isActive ? styles.linkActive : styles.link
							}
						>
							Cartoons
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
