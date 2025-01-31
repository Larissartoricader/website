import { animated } from "@react-spring/web";
import styled from "styled-components";

export const KeywordsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

export const StyledOpenSentence = styled.h2`
  color: var(--primary-fontcolor);
  font-size: 2.5rem;
  text-align: center;
`;

export const TransitionsItem = styled(animated.div)`
  font-size: 2rem;
`;

export const KeywordsContainer = styled.div`
  margin-inline: 350px;

  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
