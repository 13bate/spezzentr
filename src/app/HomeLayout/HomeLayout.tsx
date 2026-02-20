import { Outlet } from 'react-router'
import { Container } from '../../components/Container'
import styles from "./HomeLayout.module.scss"
import { Header } from '../../components/Header'
export const HomeLayout: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header isHomeHeader={true} />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}
