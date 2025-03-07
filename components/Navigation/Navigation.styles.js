import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { ClearSharp } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";

export const StyledDrawerContainer = styled.div``;

export const StyledBox = styled(Box)`
  position: relative;
  // background: rgb(34, 0, 36);
  // background: linear-gradient(
  //   51deg,
  //   rgba(34, 0, 36, 1) 75%,
  //   rgba(188, 0, 255, 1) 100%
  // );
  background-color: #e4b5cf;
  background-image: linear-gradient(
    225deg,
    #e4b5cf 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
`;

export const StyledCross = styled(ClearSharp)`
  position: absolute;
  right: 50px;
  top: 30px;
  color: #bc00ff;
  background-color: white;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  &:hover {
    border: 1px solid #bc00ff;
  }
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 99%;
  object-fit: cover;
  object-position: right top;
`;

export const StyledList = styled(List)`
  position: absolute;
  left: 0px;
  top: 0px;
  left: 50px;
  top: 50px;
  @media (min-width: 768px) {
    left: 150px;
    top: 150px;
  }
  @media (min-width: 1024px) {
    left: 120px;
    top: 120px;
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  // transition: transform 0.3s ease, box-shadow 0.3s ease;

  // &:hover {
  //   transform: scale(1.05);
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  // }
`;

export const StyledListItemText = styled(ListItemText)`
  color: var(--primary-fontcolor);
  span {
    font-size: var(--font-size-large) !important;
    max-width: auto;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: White;
  cursor: pointer;
  &:hover {
    color: #bc00ff;
    transform: scale(1.3);
  }
`;
export const NavText = styled.p`
  color: var(--primary-fontcolor);
`;
