import { animated } from "@react-spring/web";
import styled from "styled-components";

export const KeywordsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  margin-bottom: 50px;
`;

export const StyledOpenSentence = styled.h2`
  color: var(--primary-fontcolor);
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const TransitionsItem = styled(animated.div)`
  font-size: 2.2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const KeywordsContainer = styled.div`
  margin-inline: 0px;
  margin-block: 50px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-block: 25px;
    margin-inline: 50px;
  }
  @media (max-width: 1024px) {
    margin-inline: 100px;
  }
`;
