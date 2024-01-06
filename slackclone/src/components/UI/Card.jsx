
import classes from "./Card.module.css"
import Paper from '@mui/material/Paper';

const Card = ({children}) => {
    return (
        <Paper 
        elevation={2}
        className={`${classes.card}`}>
            {children}
        </Paper>
    );
}

export default Card;