import { trainingCenterCardsData } from "./model.ts"
import { CardsOverview } from "../CardsOverview/CardsOverview"


interface Props {
  className?: string
}

export const TrainnigCenterOverview: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CardsOverview title={"Учебный центр"} cardsData={trainingCenterCardsData} />
    </div>

  )
}

