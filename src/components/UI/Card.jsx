
import classes from "./Card.module.css"
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

const Card = ({children}) => {
    const md = useMediaQuery('(min-width:500px)');

    return (
        <Paper 
        elevation={md ? 3 : 0}
        className={`${classes.card}`}
       
        >
            {children}
        </Paper>
    );
}

export default Card;