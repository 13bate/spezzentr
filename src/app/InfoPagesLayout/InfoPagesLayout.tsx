import { Outlet } from "react-router"
import { Container } from "../../components/Container"
import { PageHeader } from "../../components/PageHeader"


export const InfoPagesLayout: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
