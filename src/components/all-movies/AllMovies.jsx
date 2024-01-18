import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import styles from './AllMovies.module.scss'
import Card from '../ui/card/Card'
import { MoviesService } from '../../services/movies.service'
import CustomSelect from '../ui/custom-select/CustomSelect'
import Pagination from '../pagination/Pagination'

const AllMovies = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [sort, setSort] = useState('')

	const pageSize = data?.meta?.total_pages

	useEffect(() => {
		const getSerials = async () => {
			const { data } = await MoviesService.getSerialsPaginationAndSorting(
				'movies',
				currentPage,
				sort
			)
			setData(data)
		}
		getSerials()
		window.scrollTo(0, 0)
	}, [currentPage, sort, pageSize])

	const handlePageChange = pageIndex => {
		setCurrentPage(pageIndex)
	}
	const handleSorting = ({ target }) => {
		setSort(target.value)
	}
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [currentPage])

	if (data.items)
		return (
			<Layout>
				<div className={styles.wrapper}>
					<Container>
						<div className={styles.head}>
							<h4>All Movies</h4>
							<CustomSelect onSort={handleSorting} />
						</div>
						<div className={styles.items}>
							{data?.items.map(item => (
								<Card
									className={styles.serialCard}
									item={item}
									key={item.id}
									isLoading={isLoading}
									type='movie'
								/>
							))}
						</div>
						<Pagination
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					</Container>
				</div>
			</Layout>
		)
}

export default AllMovies
