import React, { useContext, useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import styles from './Account.module.scss'
import { AuthContext } from '../../utils/AuthContext'
import { MdAccountCircle } from 'react-icons/md'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Account = () => {
	const { user, setUser } = useContext(AuthContext)
	const [file, setFile] = useState()
	const [progress, setProgress] = useState({ started: false, pc: 0 })
	const [message, setMessage] = useState(null)
	const favorites = useSelector(state => state.favorites)

	const handleUploadFile = () => {
		if (!file) {
			setMessage('No file selected!')
			return
		}
		const fd = new FormData()
		fd.append('file', file)

		setMessage('Uploading...')
		setProgress(prev => ({ ...prev, started: true }))
		axios
			.post(`${import.meta.env.VITE_BASE_URL}/uploads`, fd, {
				onUploadProgress: progressEvent => {
					setProgress(prev => ({ ...prev, pc: progressEvent.progress * 100 }))
				},
				headers: {
					'Content-Type': 'value'
				}
			})
			.then(res => {
				setMessage('Uploading successful')
				setFile(res.data)
			})
			.catch(err => {
				setMessage('Uploading failed')
				console.log(err)
			})

		axios
			.patch(`${import.meta.env.VITE_BASE_URL}/users/${user.id}`, user.image)
			.then(({ data }) => {
				setUser(data)
				return console.log(data)
			})
	}

	if (user)
		return (
			<Layout>
				<div className={styles.body}>
					<Container>
						<h3 className={styles.title}>My account</h3>
						<div className={styles.info}>
							<div className={styles.avatar}>
								{/* <img src={user.image} alt='' /> */}
								<MdAccountCircle size={200} />
								{/* <div className={styles.inputFile}>
									<div>
										<input
											type='file'
											onChange={e => setFile(e.target.files[0])}
										/>
									</div>

									<button onClick={handleUploadFile}>Download photo</button>
									{message && <span>{message}</span>}
								</div> */}
							</div>
							<div className={styles.details}>
								<div>
									<span>Email:</span> {user.email}
								</div>
								<div>
									<span>Name:</span> {user.name}
								</div>
								<div>
									<span>Phone:</span> {user.tel}
								</div>
								<div>
									<span>Favorite Film: </span>
									{user.favoritesFilm?.length}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</Layout>
		)
}

export default Account
