import { trainingCenterCardsData } from "./model.ts"
import { HomeCards } from "../HomeCards/HomeCards.tsx"
import { SafetyTrainingOverview } from "../SafetyTrainingOverview"
import { SecurityTrainingOverview } from "../SecurityTrainingOverview/"



interface Props {
  className?: string
}

export const TrainnigCenterSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HomeCards title={"Учебный центр"} cardsData={trainingCenterCardsData} />
      <SecurityTrainingOverview />
      <SafetyTrainingOverview />
    </div>

  )
}

