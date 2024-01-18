import React from 'react'
import styles from './Footer.module.scss'
import Container from '../../ui/container/Container'
import Navigation from '../header/navigation/Navigation'
import SubMenu from './sub-menu/SubMenu'
import ButtonUpload from './button-upload/ButtonUpload'
import {
	FaTwitter,
	FaFacebookF,
	FaYoutube,
	FaTelegramPlane
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.nav}>
					<Navigation />
				</div>
				<SubMenu />
				<div className={styles.btns}>
					<ButtonUpload text='Google Play' />
					<ButtonUpload text='App Store' />
				</div>
				<div className={styles.social}>
					<FaTwitter size={24} color='#cdcdd1' cursor='pointer' />
					<FaFacebookF size={24} color='#cdcdd1' cursor='pointer' />
					<FaYoutube size={24} color='#cdcdd1' cursor='pointer' />
					<FaTelegramPlane size={24} color='#cdcdd1' cursor='pointer' />
				</div>
			</Container>
		</div>
	)
}

export default Footer
