import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { messagesActions } from "../../store/message-slice";
import MessageIcon from '@mui/icons-material/Message';
const CommentBox = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();


    const onChangeHanlder = (e) => {
        console.log(e);
        if (e.keyCode !== 13) {
            setComment(e.target.value)
        }
    }

    const sendMessage = () => {
        dispatch(messagesActions.addMessage({
            photo: 'https://media.vogue.mx/photos/5d6eb55456587800082ae4ba/1:1/w_2002,h_2002,c_limit/Cara-Delevingne-tendencias-belleza-2.jpg',
            fullName: 'Cara Delevigne',
            hour: `${new Date().getHours()}:${new Date().getMinutes()}-${new Date().getSeconds()}`,
            message: comment
        }));
        setComment('');
    }
    const submitHandler = (e) => {
        e.preventDefault();
        sendMessage();
    }
    const pressEnterHandler = (e) => {
        if (e.keyCode == 13) {
            sendMessage();
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <Stack direction={'row'} spacing={2}>
                <MessageIcon
                    sx={{
                        color: 'action.active', mr: 1,
                        alignSelf: 'end'
                    }} />
                <TextField
                    id="standard-multiline-flexible"
                    label="Chat"
                    multiline
                    maxRows={4}
                    onKeyUp={pressEnterHandler}
                    value={comment}
                    onChange={onChangeHanlder}
                    variant="standard"
                    sx={{ width: "100%", maxWidth: '600px' }}
                />

                <IconButton
                    type='submit'
                    sx={{ maxHeight: "30px", maxWidth: "30px", alignSelf: "center" }}>
                    <SendIcon />
                </IconButton>
            </Stack>
        </form>
    )
}

export default CommentBox