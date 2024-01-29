import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useSelector } from 'react-redux'

export const AuthContext = createContext()

const Context = ({ children }) => {
	// const favorites = useSelector(state => state.favorites)
	const [user, setUser] = useState({
		email: ''
	})

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('user')) !== null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}
	}, [])
	const value = {
		setUser,
		user
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default Context
