import { animated } from "@react-spring/web";
import styled from "styled-components";

export const KeywordsMain = styled.div`
  min-width: 100px;
  padding: 0 20px;
  margin: 0 auto;
  height: 260px;
`;

export const transitionsItem = styled(animated)`
  overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 4em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
`;

export const KeywordsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
