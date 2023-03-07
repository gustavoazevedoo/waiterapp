import { Container, CaterogiesContainer, MenuContainer, FooterContainer, Footer } from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";

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
        <FooterContainer>
          <Button onPress={() => alert("novoPedido")}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
