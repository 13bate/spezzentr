import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/Home'
import { RootLayout } from './layouts'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
])
