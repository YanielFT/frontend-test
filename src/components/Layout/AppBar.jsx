import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';



const AppBarConfig = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Appbar = ({ toggleDrawer, open }) => {

    return (
        <AppBarConfig position="absolute" open={open} >
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                
             <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '10px',
                        ...(open && { visibility: 'hidden'}),
                    }}
                >
                    <MenuIcon />
                </IconButton>
             
               
                

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: '0.6rem',
                    marginLeft: '10px'
                }}
                flexGrow={1}  >
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap

                    >
                        #Social Media
                    </Typography>
                    <StarIcon />
                </Box>


                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBarConfig>
    )
}

export default Appbar;

