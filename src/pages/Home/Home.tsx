import clsx from "clsx"
import { TrainnigCenterOverview } from "../../components/TrainnigCenterOverview/index.ts"
import styles from "./Home.module.scss"
interface Props {
	className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, styles.homeContainer)}>
			<div className={styles.contentContainer}>
				<TrainnigCenterOverview />
			</div>
		</div>
	)
}
