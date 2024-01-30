import React, { useContext, useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { FaSearch } from 'react-icons/fa'
import { MoviesService } from '../../../../../services/movies.service'

import { AuthContext } from '../../../../../utils/AuthContext'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Search = () => {
	const [open, setOpen] = useState(false)
	const [title, setTitle] = useState(null)
	const [items, setItems] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const searchTitleMovie = async () => {
			const { data } = await MoviesService.searchMovie(title)
			setItems(data)
			console.log(data)
		}

		searchTitleMovie()
	}, [title, id])

	const handleChange = e => {
		setTitle(e.target.value)
	}
	const itemClickHandler = () => {
		setOpen(!open)
		setTitle('')
	}

	return (
		<div className={styles.search}>
			{open && (
				<input
					type='text'
					placeholder='Search movie'
					value={title}
					onChange={handleChange}
				/>
			)}
			{title && open ? (
				<div className={styles.outputFilms}>
					{items.length ? (
						<ul className={styles.items}>
							{items.map(item => (
								<Link
									to={`/${item.type}/${item.slug}/${item.id}`}
									className={styles.item}
									key={item.id}
								>
									<div className={styles.movie} onClick={itemClickHandler}>
										<div className={styles.poster}>
											<img src={item.poster} alt={item.title} />
										</div>

										<h4>{item.title}</h4>
									</div>
								</Link>
							))}
						</ul>
					) : (
						'No results'
					)}
				</div>
			) : null}

			<FaSearch
				size={28}
				cursor='pointer'
				onClick={() => setOpen(prev => !prev)}
			/>
		</div>
	)
}

export default Search
