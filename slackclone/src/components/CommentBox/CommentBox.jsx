import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { messagesActions } from "../../store/message-slice";
import MessageIcon from '@mui/icons-material/Message';
import { useNavigation, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'
const CommentBox = () => {
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const state = useNavigation();
    const { userInfo } = useSelector((state) => state.auth)
    const sendMessage = () => {
        if (comment.trim().length > 0) {
            dispatch(messagesActions.addMessage({
                photo: userInfo.photo,
                fullName: userInfo.fullName,
                hour: `${new Date().getHours() < 10 ? '0' : ''}${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' : ''}${new Date().getMinutes()}-${new Date().getSeconds()}`,
                message: comment
            }));
        setComment('');
    }
}

const onChangeHanlder = (e) => {
    setComment(e.target.value)
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
    // <Form onSubmit={submitHandler}>
    <form onSubmit={submitHandler} >
        <Stack direction={'row'} spacing={2}>
            <MessageIcon
                sx={{
                    color: 'action.active', mr: 1,
                    alignSelf: 'end'
                }} />
            <TextField
                id="standard-multiline-flexible"
                label="Chat"
                onKeyUp={pressEnterHandler}
                name='message'
                value={comment}
                onChange={onChangeHanlder}
                variant="standard"
                sx={{ width: "100%", maxWidth: '600px' }}
            />
            {
                state.state === "submitting" ? (

                    <CircularProgress />

                ) :
                    <IconButton
                        type='submit'
                        sx={{ maxHeight: "30px", maxWidth: "30px", alignSelf: "end" }}>
                        <SendIcon />
                    </IconButton>
            }
        </Stack>
    </form>
)
}


// export async function action({ request }) {

//     const formData = await request.formData();
//     console.log(formData.get("message"));
//      return null;
//   }

export default CommentBox;