import React from 'react'
import styles from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.children}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
