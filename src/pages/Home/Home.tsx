import clsx from "clsx"
import style from "./Home.module.scss"
import { Separator } from "../../shared/ui/separator/"
import { SectionTitle } from "../../shared/ui/SectionTitle/"
import { ShootingClubSection } from "../../features/ShootingClubSection"
import { HeroSection } from "../../features/HeroSection"
import { TrainigCenterSection } from "../../features/TrainigCenterSection/"
import { ContactsSection } from "../../features/contacts"
import { SafetyTrainingOverview } from "../../features/SafetyTrainingOverview"
import { IntroShootingOverview } from "../../features/IntroShootingOverview"
import { useEffect } from "react"
import { GiftCardsOverview } from "../../features/GiftCardsOverview"
import { ProgrammsSection } from "../../features/ProgrammsSection"

interface Props {
	className?: string
}
export const Home: React.FC<Props> = ({ className }) => {
	useEffect(() => {
		if (location.hash === "#contacts") {
			const el = document.getElementById("contacts");

			if (el) {
				const headerHeight = 80;

				const y =
					el.getBoundingClientRect().top + window.scrollY - headerHeight;

				window.scrollTo({
					top: y,
					behavior: "smooth",
				});
			}
		}
	}, [location]);
	return (
		<div className={clsx(className, style.homeContainer)}>
			<HeroSection />
			<div className={style.contentContainer}>
			  <SectionTitle title={"СТРЕЛКОВЫЙ КЛУБ"} />
				<ShootingClubSection />
				<ProgrammsSection />
				<IntroShootingOverview />
				<GiftCardsOverview />
				<Separator />
				<SectionTitle title={"УЧЕБНЫЙ ЦЕНТР"} />
				<TrainigCenterSection />
				<SafetyTrainingOverview />
				<ContactsSection />
				</div>
			</div>

	)
}
