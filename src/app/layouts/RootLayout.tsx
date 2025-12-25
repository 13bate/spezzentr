import { Outlet } from 'react-router'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

export const RootLayout: React.FC = () => {
	return (
		<div>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}
