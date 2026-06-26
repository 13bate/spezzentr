import clsx from 'clsx'
import { useEffect } from 'react'
import { ContactsSection } from '../../features/contacts'
import { GiftCardsOverview } from '../../features/GiftCardsOverview'
import { HeroSection } from '../../features/HeroSection'
import { IntroShootingOverview } from '../../features/IntroShootingOverview'
import { ProgrammsSection } from '../../features/ProgrammsSection'
import { SafetyTrainingOverview } from '../../features/SafetyTrainingOverview'
import { ShootingClubSection } from '../../features/ShootingClubSection'
import { TrainigCenterSection } from '../../features/TrainigCenterSection/'
import { SectionTitle } from '../../shared/ui/SectionTitle/'
import { Separator } from '../../shared/ui/separator/'
import style from './Home.module.scss'

interface Props {
	className?: string
}
export const Home: React.FC<Props> = ({ className }) => {
	useEffect(() => {
		if (location.hash === '#contacts') {
			const el = document.getElementById('contacts')

			if (el) {
				const headerHeight = 80

				const y = el.getBoundingClientRect().top + window.scrollY - headerHeight

				window.scrollTo({
					top: y,
					behavior: 'smooth',
				})
			}
		}
	}, [])
	return (
		<div className={clsx(className, style.homeContainer)}>
			<HeroSection />
			<div className={style.contentContainer}>
				<SectionTitle title={'СТРЕЛКОВЫЙ КЛУБ'} />
				<ShootingClubSection />
				<ProgrammsSection />
				<IntroShootingOverview />
				<GiftCardsOverview />
				<Separator />
				<SectionTitle title={'УЧЕБНЫЙ ЦЕНТР'} />
				<TrainigCenterSection />
				<SafetyTrainingOverview />
				<ContactsSection />
			</div>
		</div>
	)
}
