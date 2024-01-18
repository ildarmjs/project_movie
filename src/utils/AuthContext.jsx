import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

const Context = ({ children }) => {
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
