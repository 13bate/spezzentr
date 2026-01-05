import { Outlet } from 'react-router'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import styles from "./RootLayout.module.scss"
export const RootLayout: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}
