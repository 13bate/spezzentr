import clsx from "clsx"
import style from "./Home.module.scss"
import { Separator } from "../../shared/ui/separator/"
import { ShootingClubSection } from "../../features/ShootingClubSection"
import { Footer } from "../../features/Footer"
import { HeroSection } from "../../features/HeroSection"
import { TrainnigCenterSection } from "../../features/TrainnigCenterSection"
import { ContactsSection } from "../../features/contacts"

interface Props {
	className?: string
}
export const Home: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, style.homeContainer)}>
			<HeroSection />
			<div className={style.contentContainer}>
				<ShootingClubSection />
				<div className={style.separatorWrapper}>
					<Separator />
					<TrainnigCenterSection />
				</div>
			</div>
			<ContactsSection />
			<Footer />
		</div>
	)
}
