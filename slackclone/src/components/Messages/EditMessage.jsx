import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { messagesActions } from "../../store/message-slice";
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditMessage({ open, handleCloseModal, message: { message: messageOld, id }, handleClose , setOpenModal}) {
    
    const [comment, setComment] = useState(messageOld);
    const dispatch = useDispatch();
   

    const pressEnterHandler = (e) => {

        if (e.keyCode == 13) {
            sendMessage();
            setOpenModal(false);
            handleClose();
        }
    }


    const sendMessage = () => {
        if (comment.trim().length > 0) {
            dispatch(messagesActions.editItem(
                {
                    id,
                    hour: `${new Date().getHours() < 10 ? '0' : ''}${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}-${new Date().getSeconds()}`,
                    message: comment
                }
            ));
            setComment('');
        }
    }

    return (
        
            <Modal
                title='Edit messsage'
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit message
                    </Typography>
                    <Typography  component={'span'} id="modal-modal-description" sx={{ mt: 2 }}>
                        <form method='POST' onSubmit={(e) => e.preventDefault()}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Chat"
                                name='message'
                               
                                onKeyUp={pressEnterHandler}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                variant="standard"
                                sx={{ width: "100%", maxWidth: '600px' }}
                            />
                        </form>
                    </Typography>
                </Box>
            </Modal>
    );
}