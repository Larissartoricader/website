import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { ClearSharp } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";

export const StyledBox = styled(Box)`
  background: rgb(34, 0, 36);
  background: linear-gradient(
    51deg,
    rgba(34, 0, 36, 1) 75%,
    rgba(188, 0, 255, 1) 100%
  );
`;

export const StyledCross = styled(ClearSharp)`
  color: white;
  position: absolute;
  right: 50px;
  top: 20px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    border: 1px solid White;
    border-radius: 50%;
  }
`;

export const StyledImageBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledImage = styled(Image)`
  border: solid 1px hotpink;
  position: absolute;
  right: 0px;
`;

export const StyledList = styled(List)`
  position: absolute;
  left: 10px;
  top: 10px;
  @media (min-width: 768px) {
    left: 50px;
    top: 50px;
  }
  @media (min-width: 1024px) {
    left: 100px;
    top: 100px;
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Expande ligeiramente o item */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
  }
`;

export const StyledListItemText = styled(ListItemText)`
  color: var(--primary-fontcolor);
  span {
    font-size: var(--font-size-large) !important;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: White;
`;
export const NavText = styled.p`
  color: var(--primary-fontcolor);
`;
