import { Outlet } from 'react-router'
import { Container } from '../../shared/ui/Container'
import styles from "./HomeLayout.module.scss"
import { Header } from '../../features/Header'
import { Footer } from '../../features/Footer'
import { ScrollToTop } from '../../shared/utils/ScrollToTop'
import { HeroSection } from '../../features/HeroSection'

export const HomeLayout: React.FC = () => {
	return (
		<div>

			<div className={styles.container}>
				<ScrollToTop />
				<Header />
				<HeroSection />
				<Container>
					<Outlet />
				</Container>
				<Footer />
			</div>

		</div>
	)
}
