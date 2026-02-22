import { Outlet } from "react-router"
import { Container } from "../../features/Container"
import { Header } from "../../features/Header"


export const InfoPagesLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
