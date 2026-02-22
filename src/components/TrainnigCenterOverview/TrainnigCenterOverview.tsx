import { trainingCenterCardsData } from "./model.ts"
import { CardsOverview } from "../CardsOverview/CardsOverview"
import { SafetyTraining } from "../SafetyTraining/SafetyTrainig.tsx"
import { SecurityTraining } from "../SecurityTraining/SecurityTraining.tsx"



interface Props {
  className?: string
}

export const TrainnigCenterOverview: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CardsOverview title={"Учебный центр"} cardsData={trainingCenterCardsData} />
      <SecurityTraining />
      <SafetyTraining />
    </div>

  )
}

