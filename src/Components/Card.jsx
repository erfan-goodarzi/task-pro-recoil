import styled from "styled-components";

export const Card = styled.div`
  border-radius: 11px;
  background: #2c394b;
  box-shadow: 5px 5px 19px #19202b, -5px -5px 19px #3f526b;
  padding: 17rem 4rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
   
 
   
  &::-webkit-scrollbar-thumb {
    background: #3d495a;
    outline: 1px solid slategrey;
  }
`;
