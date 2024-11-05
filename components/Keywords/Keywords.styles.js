import { animated } from "@react-spring/web";
import styled from "styled-components";

export const KeywordsMain = styled.div``;

export const TransitionsItem = styled(animated.div)`
  border: solid 1px yellow;
  font-size: 2rem;
`;

export const KeywordsContainer = styled.div`
  border: solid 5px red;
  margin-inline: 350px;

  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
