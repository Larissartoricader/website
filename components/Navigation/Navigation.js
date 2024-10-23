import { Drawer, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledBox,
  StyledCross,
  StyledImage,
  StyledImageBox,
  StyledList,
  StyledListItemButton,
  StyledListItemText,
  StyledMenuIcon,
} from "./Navigation.styles";
import Marketing from "@/assets/Marketing.png";

export default function Navigation() {
  const NavigationMenuItems = [
    {
      id: 1,
      name: "Marketing",
      url: "./marketing",
      src: "../assets/Marketing.png",
    },
    {
      id: 2,
      name: "Development",
      url: "./marketing",
      src: "../assets/Marketing.png",
    },
    {
      id: 3,
      name: "Project Management",
      url: "./marketing",
      src: "../assets/Marketing.png",
    },
    {
      id: 4,
      name: "Projects",
      url: "./marketing",
      src: "../assets/Marketing.png",
    },
  ];

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toogleNavigation = (newOpen) => () => {
    setOpen(newOpen);
  };

  const NavigationList = (
    <StyledBox
      sx={{ width: "100vw", height: "100vh" }}
      role="presentation"
      onClick={toogleNavigation(false)}
    >
      <StyledCross
        onClick={() => {
          toogleNavigation(false);
        }}
      />
      <StyledImageBox>
        <StyledImage src={Marketing} width={550} alt={"text"} />
        <StyledList>
          {NavigationMenuItems.map((menuItem) => (
            <ListItem key={menuItem.id} disablePadding>
              <StyledListItemButton
                onClick={() => {
                  router.push(menuItem.url);
                  toogleNavigation(false);
                }}
              >
                <StyledListItemText primary={menuItem.name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </StyledList>
      </StyledImageBox>
    </StyledBox>
  );

  return (
    <>
      <StyledMenuIcon onClick={toogleNavigation(true)}>Open</StyledMenuIcon>
      <Drawer anchor={"right"} open={open} onClose={toogleNavigation(false)}>
        {NavigationList}
      </Drawer>
    </>
  );
}
