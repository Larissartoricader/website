import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { ClearSharp } from "@mui/icons-material";

export const StyledCross = styled(ClearSharp)`
  position: absolute;
  right: 50px;
  top: 20px;
  z-index: 1;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: White;
`;
export const NavText = styled.p`
  color: var(--primary-fontcolor);
`;
