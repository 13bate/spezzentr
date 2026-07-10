import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/Home'
import { HomeLayout } from './HomeLayout'
import { InfoPagesLayout } from './InfoPagesLayout/InfoPagesLayout'
import { WeaponSafety } from '../pages/WeaponSafety'
import { EducationInfoHubPage } from '../pages/EducationInfo'
import { SecurityTrainingPage } from '../pages/SecurityTrainingPage'
import { PeriodicCheckPage } from '../pages/PeriodicCheckPage'
import { DroneTrainingPage } from '../pages/DroneTrainingPage'
import { IntroShootingPage } from '../pages/IntroShootingPage'
import { PracticalShootingPage } from '../pages/PracticalShootingPage'
import { GiftCardsPage } from '../pages/GiftCardsPage'
import { BasicInfoPage } from '../pages/EduInfroPages/BasicInfoPage'
import { StructurePage } from '../pages/EduInfroPages/StructurePage'
import { DocumentsPage } from '../pages/EduInfroPages/DocumentsPage'
import { EducationPage } from '../pages/EduInfroPages/EducationPage'
import { StandardsPage } from '../pages/EduInfroPages/StandartsPage'
import { ManagementPage } from '../pages/EduInfroPages/ManagmentPage'
import { FacilitiesPage } from '../pages/EduInfroPages/FacilitiesPage'
import { PaidServicesPage } from '../pages/EduInfroPages/PaidServicesPage'
import { FinancePage } from '../pages/EduInfroPages/FinancePage'
import { VacanciesPage } from '../pages/EduInfroPages/VacanciesPage'
import { ScholarshipsPage } from '../pages/EduInfroPages/ScholarshipsPage'
import { TeachersPage } from '../pages/EduInfroPages/TeachersPage'
import { AccessibilityPage } from '../pages/EduInfroPages/AccessibilityPage'
import { InternationalPage } from '../pages/EduInfroPages/InternationalPage'
import { LaborSafety } from '../pages/LaborSafety'
import { WorkingProfessions } from '../pages/WorkingProfessions'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PscManagersTraining } from '../pages/PscManagersTraining'
import { CompetitionPage } from '../pages/Competitions'
import { ShootingProgramsPage } from '../pages/ShootingProgramsPage'
import { TacticalMedicinePage } from '../pages/TacticalMedicinePage'

// Массив для навигации (можно использовать где угодно)
export const eduOrgInfo = [
	{ label: "Сведения об образовательной организации", href: "/education" },
	{ label: 'Основные сведения', href: '/education/basic-info' },
	{ label: 'Структура и органы управления', href: '/education/structure' },
	{ label: 'Документы', href: '/education/documents' },
	{ label: 'Образование', href: '/education/programs' },
	{ label: 'Образовательные стандарты', href: '/education/standards' },
	{ label: 'Руководство', href: '/education/management' },
	{
		label: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда',
		href: '/education/resources',
	},
	{ label: 'Платные образовательные услуги', href: '/education/paid-services' },
	{ label: 'Финансово-хозяйственная деятельность', href: '/education/finance' },
	{ label: 'Вакантные места для приема', href: '/education/vacancies' },
	{
		label: 'Стипендии и иные виды материальной поддержки',
		href: '/education/scholarships',
	},
]

export const router = createBrowserRouter([
	{
		path: "*",
		element: <NotFoundPage />,
	},
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
				path: "training/periodic-checks",
				element: <PeriodicCheckPage />
			},
			{
				path: "training/drones",
				element: <DroneTrainingPage />
			},
			{
				path: "/training/labor-safety",
				element: <LaborSafety />
			},
			{
				path: '/training/professions',
				element: <WorkingProfessions />
			},
			{
				path: "/training/tac-med",
				element: <TacticalMedicinePage />
			},
			{
				path: "training/psc-managers",
				element: <PscManagersTraining />
			},
			{
				path: "shooting/intro",
				element: <IntroShootingPage />
			},
			{
				path: "shooting/practice",
				element: <PracticalShootingPage />
			},
			{
				path: "shooting/gift-cards",
				element: <GiftCardsPage />
			},
			{
				path: "shooting/competitions",
				element: <CompetitionPage />
			},
			{
				path: "shooting/programs",
				element: <ShootingProgramsPage />,
			},
			// Главная страница раздела
			{
				path: "education",
				element: <EducationInfoHubPage />
			},
			// Отдельные страницы для каждого подраздела (если нужны)
			{
				path: "education/teachers",
				element: <TeachersPage />
			},
			{
				path: "education/basic-info",
				element: <BasicInfoPage />
			},
			{
				path: "education/structure",
				element: <StructurePage />
			},
			{
				path: "education/documents",
				element: <DocumentsPage />
			},
			{
				path: "education/education",
				element: <EducationPage />
			},
			{
				path: "education/standards",
				element: <StandardsPage />
			},
			{
				path: "education/management",
				element: <ManagementPage />
			},
			{
				path: "education/facilities",
				element: <FacilitiesPage />
			},
			{
				path: "education/paidServices",
				element: <PaidServicesPage />
			},
			{
				path: "education/finance",
				element: <FinancePage />
			},
			{
				path: "education/vacancies",
				element: <VacanciesPage />
			},
			{
				path: "education/scholarships",
				element: <ScholarshipsPage />
			},
			{
				path: "education/accessibility",
				element: <AccessibilityPage />
			},
			{
				path: '/education/international',
				element: <InternationalPage />
			},
		],
	},
], { basename: '/spezzentr' })
