import React, { useContext, useState } from 'react'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../utils/AuthContext'
import { useForm } from 'react-hook-form'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const { user, setUser } = useContext(AuthContext)
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: 'all'
	})

	const navigate = useNavigate()

	const submitHandler = (data, e) => {
		// e.preventDefault()

		let newUser = {
			name: data.name,
			email: data.email,
			password: data.password
		}
		// console.log(newUser)
		axios
			.post(`${import.meta.env.VITE_BASE_URL}/register`, newUser)
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
				{/* <div className={styles.test}></div> */}
				<Container>
					<div className={styles.wrapper}>
						<h3 className={styles.title}>Register page</h3>
						<form
							className={styles.form}
							onSubmit={handleSubmit(submitHandler)}
						>
							<input
								// value={name}
								// onChange={e => setName(e.target.value)}
								type='text'
								placeholder='Please to enter your name'
								{...register('name', {
									required: 'Вы не ввели Имя',
									minLength: {
										value: 4,
										message: 'Имя должно содержать не менее 4 символов'
									}
								})}
							/>
							{errors.name && (
								<span className={styles.error}>{errors.name.message}</span>
							)}
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
							<button
								className={styles.button}
								type='submit'
								disabled={!isValid}
							>
								Register
							</button>
						</form>

						<p className={styles.text}>
							if your have account, <Link to='/login'>login</Link>
						</p>
					</div>
				</Container>
			</div>
		</Layout>
	)
}

export default Register
