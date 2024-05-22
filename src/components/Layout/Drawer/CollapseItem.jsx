
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import IconExport from '../../helper/IconExport';
import { NavLink } from "react-router-dom";
const CollapseItem = ({ itemLvl2, open }) => {

    return (
        <NavLink to={itemLvl2.chat ? itemLvl2.chat+"/": ''}  end className={({ isActive }) =>
         isActive ? "active" : ""}>
            <Collapse in={open} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>

                        <ListItemIcon>
                            {<IconExport iconText={itemLvl2.icon} />}
                        </ListItemIcon>
                        <ListItemText primary={itemLvl2.title} />
                    </ListItemButton>
                </List>
            </Collapse>
        </NavLink>)
}

export default CollapseItem