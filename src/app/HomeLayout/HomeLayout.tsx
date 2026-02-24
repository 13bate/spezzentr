import { Outlet } from 'react-router'
import { Container } from '../../features/Container'
import styles from "./HomeLayout.module.scss"
import { Header } from '../../features/Header'
import { Footer } from '../../features/Footer'
import { ScrollToTop } from '../../shared/utils/ScrollToTop'
export const HomeLayout: React.FC = () => {
	return (
		<div className={styles.container}>
			<ScrollToTop />
			<Header />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</div>
	)
}
