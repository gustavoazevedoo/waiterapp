import { Container, CaterogiesContainer, MenuContainer, FooterContainer, Footer } from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CaterogiesContainer>
          <Categories />
        </CaterogiesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
}
