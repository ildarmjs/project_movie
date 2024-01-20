import React, { useContext, useState } from 'react'
import Logo from '../logo/Logo'
import { MdMenu, MdClose } from 'react-icons/md'
import styles from './MobileMenu.module.scss'
import Button from '../../../ui/button/Button'
import { FaSearch } from 'react-icons/fa'
import { AuthContext } from '../../../../utils/AuthContext'
import { Link } from 'react-router-dom'
import Search from '../actions/search/Search'

const MobileMenu = () => {
	const [open, setOpen] = useState(false)
	const { user, setUser } = useContext(AuthContext)
	const toggleMenu = () => {
		setOpen(prev => !prev)
	}
	const handleLogOut = () => {
		setUser({
			email: ''
		})
		localStorage.removeItem('user')
		setOpen(prev => !prev)
		// navigate('/register')
	}
	return (
		<div className={styles.menu}>
			<Logo />
			<div className={styles.right}>
				<Search />
				{open ? (
					<MdClose size={30} cursor='pointer' onClick={toggleMenu} />
				) : (
					<MdMenu size={30} cursor='pointer' onClick={toggleMenu} />
				)}
				{open && (
					<div className={styles.menuBody}>
						<nav className={styles.nav}>
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
						<div className={styles.actions}>
							<Button text={'Try 30 days for free'} />
							<br />
							<br />
							{user.email.length ? (
								<Button
									emailLength={user.email.length}
									handleClick={handleLogOut}
									text={'Logout'}
								/>
							) : (
								<Button text={'Sign In'} type={'login'} />
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default MobileMenu

// <MdClose />
// import { MdClose } from 'react-icons/md'
