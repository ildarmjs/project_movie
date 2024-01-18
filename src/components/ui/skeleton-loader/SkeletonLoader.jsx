import Skeleton from 'react-loading-skeleton'
import cn from 'classnames'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './SkeletonLoader.module.scss'

const SkeletonLoader = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor='#1F2125'
			highlightColor='#292A2E'
			className={cn(styles.skeleton, className)}
		/>
	)
}

export default SkeletonLoader
