 
import styled from "styled-components";

const Container = styled.div`
  font-family: -webkit-pictograph;
  font-size: 47px;
  font-weight: bold;
  margin-top: -17rem;
  padding: 4px 2px;
  color: #fff;
`;

export const Header = () => {
  return (
    <Container>
      <span role="img" aria-label="Taskhero logo">
        ✔️
      </span>{" "}
      Task Pro
    </Container>
  );
};
