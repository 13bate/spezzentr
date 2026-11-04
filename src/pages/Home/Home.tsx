import clsx from 'clsx'
import { ContactsSection } from '../../features/contacts'
import { GiftCardsOverview } from '../../features/GiftCardsOverview'
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

	return (
		<div className={clsx(className, style.homeContainer)}>
			<div className={style.contentContainer}>
      <SectionHeader
      	id="ShootingClub"
        title="Стрелковый клуб"
        align="center"
      />
				<ShootingClubSection />
				<ArsenalSection/>
				<ProgrammsSection />
				<GiftCardsOverview />
				<SectionHeader
				id="TrainingCenter"
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
