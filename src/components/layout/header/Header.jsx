import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Container from '../../ui/container/Container'
import Menu from './menu/Menu'
import MobileMenu from './mobile-menu/MobileMenu'

const Header = () => {
	const [matches, setMatches] = useState(
		window.matchMedia('(max-width: 767px)').matches
	)

	useEffect(() => {
		window
			.matchMedia('(max-width: 767px)')
			.addEventListener('change', e => setMatches(e.matches))
	}, [])

	return (
		<header className={styles.header}>
			<Container>{!matches ? <Menu /> : <MobileMenu />}</Container>
		</header>
	)
}

export default Header
