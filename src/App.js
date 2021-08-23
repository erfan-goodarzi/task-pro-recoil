import styled from "styled-components";
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { Input } from "./Components/Input";
import { Stats } from "./Components/TaskState";

const Main = styled.div`
  margin-top: 2em;
`;
function App() {
  return (
    <Main>
       <Stats />
      <Card>
        <Header />
        <Input />
      </Card>
    </Main>
  );
}

export default App;
