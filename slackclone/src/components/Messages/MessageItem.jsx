import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
import { messagesActions } from "../../store/message-slice";
import EditMessage from './EditMessage';
const MessageItem = ({ items: { photo, fullName, hour, message, id, idUser } }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const { userToken } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRemove = () => {
    dispatch(messagesActions.removeItem({ id }));
    setAnchorEl(null);
  };
  const handleEdit = () => {
    setOpenModal(true);
  };

  return (
    <Paper elevation={2}
      sx={{ marginBlock: '2rem', padding: '0.8rem', paddingRight: '1rem', maxWidth: '60rem' }}>
      <Grid container spacing={2}>
        <Grid width={'70px'} xs={2} >
          <Avatar
            variant="square"
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp" src={photo} />
        </Grid>
        <Grid xs>
          <Stack display={"flex"}
            alignItems={"start"}
            justifyContent={"start"}
            direction="row" spacing={2}>
            <Stack>
              <Stack direction={"row"}
                spacing={1}
              >
                <Typography
                  variant="h6" gutterBottom>
                  {fullName}
                </Typography>
                <Typography
                  justifySelf={"flex-end"}
                  variant="overline" gutterBottom>
                  {hour}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography
            sx={{ wordWrap: "break-word" }}
            flexWrap={'wrap'} variant="body2" gutterBottom>
            {message}
          </Typography>
        </Grid>
        {userToken === idUser ?
          <Grid xs={1}>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleRemove}>Delete</MenuItem>
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <EditMessage setOpenModal={setOpenModal} open={openModal} handleCloseModal={handleCloseModal} handleClose={handleClose} message={{ message, id }} />
            </Menu>
          </Grid>
          : <></>
        }
      </Grid>
    </Paper>
  )
}

export default MessageItem;