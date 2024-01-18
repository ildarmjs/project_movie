import React, { useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { FaSearch } from 'react-icons/fa'
import { MoviesService } from '../../../../../services/movies.service'

const Search = () => {
	const [open, setOpen] = useState(false)
	const [title, setTitle] = useState('')

	// useEffect(() => {
	// 	const searchTitleMovie = async () => {
	// 		const { data } = await MoviesService.searchMovie(title)
	// 		console.log(data)
	// 	}
	// 	searchTitleMovie()
	// }, [])
	return (
		<div className={styles.search}>
			{open && (
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
			/>
		</div>
	)
}

export default Search
