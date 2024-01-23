import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import styles from './AllSerials.module.scss'

import { useGetSerialsQuery } from '../../redux/api/serialsApi'
import Card from '../ui/card/Card'
import Pagination from '../pagination/Pagination'
import CustomSelect from '../ui/custom-select/CustomSelect'
import { MoviesService } from '../../services/movies.service'

const AllSerials = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [sort, setSort] = useState('')
	// const { data, error, isLoading } = useGetSerialsQuery(currentPage, sort)

	// const pageSize = data?.meta?.total_pages
	const pageSize = data?.meta?.total_pages
	useEffect(() => {
		const getSerials = async () => {
			const { data } = await MoviesService.getSerialsPaginationAndSorting(
				'serials',
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
							<h4>All serials</h4>
							<CustomSelect onSort={handleSorting} />
						</div>

						<div className={styles.items}>
							{data?.items.map(item => (
								<Card
									serialRatingStyle={styles.ratingItem}
									serialTitleStyle={styles.titleItem}
									serialPriceStyle={styles.priceItem}
									serialCardStyle={styles.serialCard}
									item={item}
									key={item.id}
									isLoading={isLoading}
									type='serial'
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

export default AllSerials
