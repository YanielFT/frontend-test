
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import IconExport from '../../helper/IconExport';

const ItemButton = ({ title, items }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };
  const lvl2 = items.map(itemLvl2 => <Collapse key={itemLvl2.title} in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          {<IconExport iconText={itemLvl2.icon} />}
        </ListItemIcon>
        <ListItemText primary={itemLvl2.title} />
      </ListItemButton>
    </List>
  </Collapse>
  );

  return (
    <>
      <ListItemButton
        onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemText
          sx={{ marginLeft: "2rem" }}
          primary={title} />
        <IconButton

          edge="end" aria-label="delete">
          <AddIcon />
        </IconButton>
      </ListItemButton>
      {lvl2}
    </>
  )
}

export default ItemButton;