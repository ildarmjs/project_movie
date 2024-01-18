import React, { useContext, useState } from 'react'
import Logo from '../logo/Logo'
import { MdMenu, MdClose } from 'react-icons/md'
import styles from './MobileMenu.module.scss'
import Button from '../../../ui/button/Button'
import { FaSearch } from 'react-icons/fa'
import { AuthContext } from '../../../../utils/AuthContext'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
	const [open, setOpen] = useState(false)
	const { user } = useContext(AuthContext)
	const toggleMenu = () => {
		setOpen(prev => !prev)
	}
	return (
		<div className={styles.menu}>
			<Logo />

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
						<div className={styles.search}>
							<input type='text' placeholder='Search movie' />
							<FaSearch
								size={28}
								onClick={() => setOpen(prev => !prev)}
								cursor='pointer'
							/>
						</div>

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
	)
}

export default MobileMenu

// <MdClose />
// import { MdClose } from 'react-icons/md'
