import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MainListItems from "./ListItemSidebar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { getUserById } from "../../../lib/api";
import { useCallback, useEffect, useState } from "react";
import { Backdrop } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const DrawerConfig = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
    }),
  },
}));

const Drawer = ({ toggleDrawer, open }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});

  const request = useCallback(async () => {
    const data = await getUserById(userInfo).then((result) => result);
    setUser(data);
  }, [userInfo]);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <>
      <DrawerConfig
        sx={{
          zIndex: 100201,
        }}
        variant="permanent"
        open={open}
      >
        <Toolbar>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: [1],
            }}
          >
            {
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="You" src={user ? user.photo : userInfo.photo} />
              </StyledBadge>
            }

            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Stack>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems onClose={toggleDrawer}/>
        </List>
      </DrawerConfig>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 10000,
        }}
        open={open}
        onClick={toggleDrawer}
      ></Backdrop>
    </>
  );
};

export default Drawer;

// export default Drawer;
