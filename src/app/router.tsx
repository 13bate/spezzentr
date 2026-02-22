import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/Home'
import { HomeLayout } from './HomeLayout'
import { InfoPagesLayout } from './InfoPagesLayout/InfoPagesLayout'
import { WeaponSafety } from '../pages/WeaponSafety'
import { SecurityTrainingPage } from '../pages/SecurityTrainingPage'
import { PeriodicCheckPage } from '../pages/PeriodicCheckPage'
import { DroneTrainingPage } from '../pages/DroneTrainingPage'
import { IntroShootingPage } from '../pages/IntroShootingPage' // Импортируем

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
		children: [
			{
				path: "training/safety",
				element: <WeaponSafety />
			},
			{
				path: "training/security-guards",
				element: <SecurityTrainingPage />
			},
			{
				path: "training/periodic-check",
				element: <PeriodicCheckPage />
			},
			{
				path: "training/drones",
				element: <DroneTrainingPage />
			},
			{
				path: "shooting/intro", // Новый маршрут
				element: <IntroShootingPage />
			},
		],
	},
])
