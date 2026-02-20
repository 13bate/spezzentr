import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/Home'
import { HomeLayout } from './HomeLayout'
import { InfoPagesLayout } from './InfoPagesLayout/InfoPagesLayout'
import { WeaponSafety } from '../pages/WeaponSafety'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: "/",
		element: <InfoPagesLayout />,
		children: [{
			path: "/training/safety/",
			element: <WeaponSafety />

		},],
	},
	{
		path: "/",
		element: <InfoPagesLayout />,
		children: [{
			path: "/shooting/intro/",
			element: <WeaponSafety />

		},],
	},
],)
