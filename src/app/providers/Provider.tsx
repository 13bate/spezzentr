import { RouterProvider } from 'react-router'
import { router } from '../router'

interface Props {
	children?: React.ReactNode
}

export const Provider: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<RouterProvider router={router} />
			{children}
		</div>
	)
}
