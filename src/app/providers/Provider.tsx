import { RouterProvider } from 'react-router'
import { router } from '../router'
import styles from "./Provider.module.scss"
import { Container } from '../../shared/ui/Container'

interface Props {
	children?: React.ReactNode
}

export const Provider: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<RouterProvider router={router} />
			<Container>
				{children}
			</Container>
		</div>
	)
}
