import React from 'react'
import styles from './SubMenu.module.scss'

const SubMenu = () => {
	const subMenu = [
		'Agreement',
		'Advertisement',
		'Reference',
		'Blog',
		'Other',
		'Support'
	]

	return (
		<nav className={styles.submenu}>
			<ul className={styles.list}>
				{subMenu.map((item, idx) => (
					<li key={idx + 1}>
						<a href='#'>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SubMenu
