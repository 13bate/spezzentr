import { Outlet } from "react-router"
import { Container } from "../../features/Container"
import { Header } from "../../features/Header"
import { Footer } from "../../features/Footer"
import { ScrollToTop } from "../../shared/utils/ScrollToTop"


export const InfoPagesLayout: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
