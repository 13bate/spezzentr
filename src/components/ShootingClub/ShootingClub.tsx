import { shootingRangeCardsData } from "./model"
import { CardsOverview } from "../CardsOverview/CardsOverview"

import { GiftCards } from "../GiftCards"
import { Separator } from "../../shared/ui/separator"
import { IntroShooting } from "../IntroShooting/IntroShooting"


interface Props {
  className?: string
}

export const ShootingClub: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CardsOverview
        title={"Стрелковый клуб"} cardsData={shootingRangeCardsData} />
      <IntroShooting />
      <Separator />
      <GiftCards />
    </div>
  )
}
