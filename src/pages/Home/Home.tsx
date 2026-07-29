import clsx from 'clsx'
import { useEffect } from 'react'
import { ContactsSection } from '../../features/contacts'
import { GiftCardsOverview } from '../../features/GiftCardsOverview'
import { HeroSection } from '../../features/HeroSection'
import { ProgrammsSection } from '../../features/ProgrammsSection'
import { SafetyTrainingOverview } from '../../features/SafetyTrainingOverview'
import { ShootingClubSection } from '../../features/ShootingClubSection'
import { TrainigCenterSection } from '../../features/TrainigCenterSection/'
import {ArsenalSection} from "../../features/ArsenalSection"
import style from './Home.module.scss'
import {SectionHeader} from "../../shared/ui/SectionHeader"

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
			<div className={style.contentContainer}>
				<HeroSection />
      <SectionHeader
        title="Стрелковый клуб"
        align="center"
      />
				<ShootingClubSection />
				<ArsenalSection/>
				<ProgrammsSection />
				<GiftCardsOverview />
				<SectionHeader
        title="Учебный центр"
        align="center"
      />
				<TrainigCenterSection />
				<SafetyTrainingOverview />
				<ContactsSection />
			</div>
		</div>
	)
}
