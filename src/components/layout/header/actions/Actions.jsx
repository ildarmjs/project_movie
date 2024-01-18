import React, { useContext, useState } from 'react'
import Button from '../../../ui/button/Button'
import styles from './Actions.module.scss'
import { AuthContext } from '../../../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'
import Search from './search/Search'

const Actions = () => {
	const { user, setUser } = useContext(AuthContext)
	// const navigate = useNavigate()

	const handleLogOut = () => {
		setUser({
			email: ''
		})
		localStorage.removeItem('user')
		// navigate('/register')
	}

	return (
		<div className={styles.actions}>
			<Search />
			<Button text={'Try 30 days for free'} />

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
	)
}

export default Actions
