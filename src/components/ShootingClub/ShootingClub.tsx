import { shootingRangeCardsData } from "./model"
import { CardsOverview } from "../CardsOverview/CardsOverview"

interface Props {
  className?: string
}

export const ShootingClub: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CardsOverview
        title={"Стрелковый клуб"} cardsData={shootingRangeCardsData} />
    </div>
  )
}
