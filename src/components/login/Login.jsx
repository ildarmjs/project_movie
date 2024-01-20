import React, { useContext, useState } from 'react'
import styles from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import { AuthContext } from '../../utils/AuthContext'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Login = () => {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	const { user, setUser } = useContext(AuthContext)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: 'all'
	})

	const submitHandler = data => {
		// e.preventDefault()
		let newUser = {
			email: data.email,
			password: data.password
		}
		axios
			.post(`${import.meta.env.VITE_BASE_URL}/auth`, newUser)
			.then(({ data }) => {
				setUser({ token: data.token, ...data.data })
				localStorage.setItem(
					'user',
					JSON.stringify({ token: data.token, ...data.data })
				)
				navigate('/')
			})
			.catch(e => console.log(e.message))

		reset()
	}

	return (
		<Layout>
			<div className={styles.body}>
				<Container>
					<div className={styles.wrapper}>
						<h3 className={styles.title}>Login page</h3>
						<form
							className={styles.form}
							onSubmit={handleSubmit(submitHandler)}
						>
							<input
								// value={email}
								// onChange={e => setEmail(e.target.value)}
								className={styles.fieldEmail}
								type='email'
								placeholder='Please to enter your email'
								{...register('email', {
									required: 'Вы не ввели email',
									pattern: {
										value: /^\S+@\S+\.\S+$/g,
										message: 'email введён не корректно'
									}
								})}
							/>
							{errors.email && (
								<span className={styles.error}>{errors.email.message}</span>
							)}
							<input
								// value={password}
								// onChange={e => setPassword(e.target.value)}
								className={styles.fieldPassword}
								type='password'
								placeholder='Please to enter your password'
								{...register('password', {
									required: 'Вы не ввели пароль',
									minLength: {
										value: 6,
										message: 'Пароль должен состоять минимум из 6 символов'
									}
								})}
							/>
							{errors.password && (
								<span className={styles.error}>{errors.password.message}</span>
							)}
							<button className={styles.button} disabled={!isValid}>
								Login
							</button>
						</form>

						<p className={styles.text}>
							if your don't have account, <Link to='/register'>register</Link>
						</p>
					</div>
				</Container>
			</div>
		</Layout>
	)
}

export default Login
