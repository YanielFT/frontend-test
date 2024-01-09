
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { useNavigate } from "react-router-dom";
import IconExport from '../../helper/IconExport';

const CollapseItem = ({itemLvl2, open}) => {
  const nav = useNavigate();
    const onClikHandler = () => {
        nav(itemLvl2.chat)
    }

    return (
        <Collapse onClick={onClikHandler} in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        {<IconExport iconText={itemLvl2.icon} />}
                    </ListItemIcon>
                    <ListItemText primary={itemLvl2.title} />
                </ListItemButton>
            </List>
        </Collapse>)
}

export default CollapseItem