import { Outlet } from 'react-router'
import { Container } from '../../components/Container'
import styles from "./HomeLayout.module.scss"
import { HomeHeader } from '../../components/HomeHeader'
export const HomeLayout: React.FC = () => {
	return (
		<div className={styles.container}>
			<HomeHeader />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}
