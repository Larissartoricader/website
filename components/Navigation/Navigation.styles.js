import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { ClearSharp } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";

export const StyledDrawerContainer = styled.div`
  max-width: auto;
`;

export const StyledBox = styled(Box)`
  // position: relative;
  background: rgb(34, 0, 36);
  background: linear-gradient(
    51deg,
    rgba(34, 0, 36, 1) 75%,
    rgba(188, 0, 255, 1) 100%
  );
`;

export const StyledCross = styled(ClearSharp)`
  color: #bc00ff;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  right: 50px;‚
  top: 20px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    border: 1px solid #bc00ff;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  right: 100px;
  top: -120px;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
`;

export const StyledList = styled(List)`
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 800px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
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
`;
export const NavText = styled.p`
  color: var(--primary-fontcolor);
`;
