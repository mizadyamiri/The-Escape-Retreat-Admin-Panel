import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row $direction="horizontal">
            <Heading as="h1">the escape retreat</Heading>

            <div>
              <Heading as="h2">Check in and out</Heading>

              <Button>Check in</Button>
              <Button $variant="danger" $size="small">
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">form</Heading>

            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
