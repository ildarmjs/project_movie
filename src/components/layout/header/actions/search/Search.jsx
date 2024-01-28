import React, { useContext, useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { FaSearch } from 'react-icons/fa'
import { MoviesService } from '../../../../../services/movies.service'
import { IoMdHeart } from 'react-icons/io'
import { AuthContext } from '../../../../../utils/AuthContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Search = () => {
	const favorites = useSelector(state => state.favorites)
	const quantity = favorites.length
	const { user } = useContext(AuthContext)

	return (
		<Link to='/favorites' className={styles.search}>
			<IoMdHeart size={45} />
			<span>{quantity ? quantity : ''}</span>

			{/* {open && (
				<input
					type='text'
					placeholder='Search movie'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			)}
			<FaSearch
				size={28}
				onClick={() => setOpen(prev => !prev)}
				cursor='pointer'
			/> */}
		</Link>
	)
}

export default Search
