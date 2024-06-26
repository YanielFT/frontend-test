import { Outlet, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { useState } from "react";
import Appbar from "./AppBar";
import Drawer from "./Drawer/Drawer";
import Container from '@mui/material/Container';



const Layout = () => {
  const { id } = useParams();
  const home = id === undefined ? true : false;
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Appbar drawerWidth={drawerWidth} open={open}
        toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} open={open} />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          padding: home ? '0':'1rem',
        }}
      >
        {home ? <Outlet /> :
          <Container maxWidth="md" sx={{ mt: 9, mb: 4 }}>
            <Outlet />
          </Container>
        }

      </Box>
    </Box>
  )
}

export default Layout;
