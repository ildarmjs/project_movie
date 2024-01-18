import React, { useState } from 'react'
// import Select from 'react-select'
import styles from './CustomSelect.module.scss'

const CustomSelect = ({ onSort }) => {
	return (
		<div className={styles.wrapper}>
			<div>Сортировать...</div>
			<select
				defaultValue={'по умолчанию'}
				className={styles.select}
				onChange={onSort}
			>
				<option value='по умолчанию'>по умолчанию</option>
				<option value='title'>по названию [A-Z]</option>
				<option value='-title'>по названию [Z-A]</option>
				<option value='-year'>по дате [A-Z]</option>
				<option value='year'>по дате [Z-A]</option>
				<option value='-rating'>лучший рейтинг</option>
				<option value='rating'>худший Рейтинг</option>
			</select>
		</div>
	)
}

export default CustomSelect

// const options = [
// 	{ value: 'chocolate', label: 'Chocolate' },
// 	{ value: 'strawberry', label: 'Strawberry' },
// 	{ value: 'vanilla', label: 'Vanilla' }
// ]

// const CustomSelect = () => {
// 	const [selectedOption, setSelectedOption] = useState(null)
// 	return (
// 		// <></>
// 		<Select
// 			// className={styles.select}
// 			styles={{
// 				control: (baseStyles, state) => ({
// 					...baseStyles,
// 					borderColor: state.isFocused ? '#7a6fff' : '#7a6fff',
// 					background: state.isDisabled ? 'red' : ''
// 				})
// 			}}
// 			defaultValue={selectedOption}
// 			onChange={setSelectedOption}
// 			options={options}
// 		/>
// 	)
// }

// export default CustomSelect
