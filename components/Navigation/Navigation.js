import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledCross, StyledMenuIcon } from "./Navigation.styles";

export default function Navigation() {
  const NavigationMenuItems = [
    { id: 1, name: "Marketing", url: "./marketing" },
    { id: 2, name: "Development", url: "./marketing" },
    { id: 3, name: "Project Management", url: "./marketing" },
    { id: 4, name: "Projects", url: "./marketing" },
  ];

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toogleNavigation = (newOpen) => () => {
    setOpen(newOpen);
  };

  const NavigationList = (
    <Box
      sx={{ width: 1000 }}
      role="presentation"
      onClick={toogleNavigation(false)}
    >
      <StyledCross
        onClick={() => {
          toogleNavigation(false);
        }}
      />
      <List>
        {NavigationMenuItems.map((menuItem) => (
          <ListItem key={menuItem.id} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(menuItem.url);
                toogleNavigation(false);
              }}
            >
              <ListItemText primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledMenuIcon onClick={toogleNavigation(true)}>Open</StyledMenuIcon>
      <Drawer open={open} onClose={toogleNavigation(false)}>
        {NavigationList}
      </Drawer>
    </>
  );
}
