import clsx from "clsx"
import { TrainnigCenterOverview } from "../../components/TrainnigCenterOverview/index.ts"
import style from "./Home.module.scss"
import { Separator } from "../../shared/ui/separator/"
import { ShootingClub } from "../../components/ShootingClub/ShootingClub.tsx"
import { Footer } from "../../components/Footer/Footer.tsx"

interface Props {
	className?: string
}
export const Home: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, style.homeContainer)}>
			<TrainnigCenterOverview />
			<div className={style.separatorWrapper}>
				<Separator />
			</div>
			<ShootingClub />
			<div className={style.marginBlock}></div>
			<Footer />
		</div>
	)
}
