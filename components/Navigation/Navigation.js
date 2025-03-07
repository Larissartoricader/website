import { Drawer, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledBox,
  StyledCross,
  StyledDrawerContainer,
  StyledImage,
  StyledImageBox,
  StyledImageContainer,
  StyledList,
  StyledListItemButton,
  StyledListItemText,
  StyledMenuIcon,
} from "./Navigation.styles";
import Image from "next/image";

export default function Navigation() {
  const NavigationMenuItems = [
    {
      id: 1,
      name: "Marketing",
      url: "./marketing",
      src: "/assets/Marketing.png",
    },
    {
      id: 2,
      name: "Development",
      url: "./development",
      src: "/assets/development.png",
    },
    {
      id: 3,
      name: "Project Management",
      url: "./project-management",
      src: "/assets/PM.jpg",
    },
    {
      id: 4,
      name: "Projects",
      url: "./projects",
      src: "/assets/Project.jpg",
    },
  ];

  const [open, setOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
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

      <StyledList>
        {NavigationMenuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            onMouseEnter={() => setHoveredMenuItem(menuItem)}
            onMouseLeave={() => setHoveredMenuItem(null)}
          >
            <ListItem disablePadding>
              <StyledListItemButton
                onClick={() => {
                  router.push(menuItem.url);
                  toogleNavigation(false);
                }}
              >
                <StyledListItemText primary={menuItem.name} />
              </StyledListItemButton>
            </ListItem>
          </div>
        ))}
      </StyledList>
      <StyledImageContainer>
        {hoveredMenuItem && (
          <StyledImage
            src={hoveredMenuItem.src}
            alt={hoveredMenuItem.name}
            width={1200}
            height={1800}
          />
        )}
      </StyledImageContainer>
    </StyledBox>
  );

  return (
    <StyledDrawerContainer>
      <StyledMenuIcon onClick={toogleNavigation(true)} />
      <Drawer anchor={"right"} open={open} onClose={toogleNavigation(false)}>
        {NavigationList}
      </Drawer>
    </StyledDrawerContainer>
  );
}
