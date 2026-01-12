import securityGuardImg from "../../assets/spezzenter/security-person.jpeg"
import safetyImg from "../../assets/spezzenter/person-take-aim.jpg"
import periodCheckImg from "../../assets/spezzenter/period-check.jpeg"
import dronesImg from "../../assets/spezzenter/drone.jpg"

export const trainingCenterCardsData = [
  {
    id: "1",
    label: 'Обучение безопасному обращению с оружием',
    href: '/training/safety',
    imageHref: safetyImg,
  },
  { id: "2", label: 'Обучение охранников', href: '/training/security-guards', imageHref: securityGuardImg },
  {
    id: "3",
    label: 'Периодическая проверка охранников 4–6 разрядов',
    href: '/training/periodic-checks',
    imageHref: periodCheckImg,
  },
  { id: "4", label: 'БПЛА', href: '/training/drones', imageHref: dronesImg },
]
