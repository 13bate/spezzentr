import { shootingRangeCardsData } from "./model"
import { HomeCards } from "../HomeCards/HomeCards"

import { GiftCardsOverview } from "../GiftCardsOverview"
import { Separator } from "../../shared/ui/separator"
import { IntroShootingOverview } from "../IntroShootingOverview/IntroShootingOverview"


interface Props {
  className?: string
}

export const ShootingClubSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HomeCards
        cardsData={shootingRangeCardsData} />
      <IntroShootingOverview />
      <Separator />
      <GiftCardsOverview />
    </div>
  )
}
