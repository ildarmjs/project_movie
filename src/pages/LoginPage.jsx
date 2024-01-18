import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/login/Login'
import Register from '../components/register/Register'

const LoginPage = () => {
	const { type } = useParams()
	// const [user, setUser] = useState({
	// 	email: ''
	// })
	// useEffect(() => {
	// 	if (JSON.parse(localStorage.getItem('user')) !== null) {
	// 		setUser(JSON.parse(localStorage.getItem('user')))
	// 	}
	// }, [])
	// console.log(user)
	return type === 'login' ? <Login /> : <Register />
}

export default LoginPage
