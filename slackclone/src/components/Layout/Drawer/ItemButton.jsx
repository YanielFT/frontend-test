
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import CollapseItem from './CollapseItem';

const ItemButton = ({ title, items }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const lvl2 = items.map(itemLvl2 => <CollapseItem key={itemLvl2.title} itemLvl2={itemLvl2} open={open}/>);

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