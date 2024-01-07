import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
const CommentBox = () => {
    return (
        <Stack direction={'row'} spacing={2}>

            <TextField
                id="standard-multiline-flexible"
                label="Chat"
                multiline
                maxRows={4}
                variant="standard"
                sx={{ width: "100%", maxWidth: '600px' }}
            />

            <IconButton sx={{ maxHeight: "30px", maxWidth: "30px", alignSelf: "center" }}>
                <SendIcon />
            </IconButton>
        </Stack>
    )
}

export default CommentBox