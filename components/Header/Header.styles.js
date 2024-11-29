import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 70px;
  @media (min-width: 768px) {
    justify-content: space-between;
    margin-inline: 50px;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    margin-inline: 100px;
  }
`;
