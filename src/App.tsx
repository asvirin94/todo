import Container from "./ui/components/Container";
import { Title } from "./ui/components/Title/styled";
import Wrapper from "./ui/components/Wrapper";
import Header from "./ui/sections/Header";

export default function App() {
  return (
    <Wrapper>
      <Container>
        <Title>
          Hello, <span>mbm</span>, start planning today
        </Title>
        <Header />
      </Container>
    </Wrapper>
  );
}
