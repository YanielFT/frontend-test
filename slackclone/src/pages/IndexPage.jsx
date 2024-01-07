import CommentBox from "../components/CommentBox/CommentBox"
import ListMessagge from "../components/Messages/ListMessagge"
import classes from "./IndexPage.module.css"
import Typography from '@mui/material/Typography';
const IndexPage = () => {
  return (
    <div className={classes.container}>
        <Typography 
        display={"block"}
        textAlign={"center"}      
        variant="caption" gutterBottom>
          desugb-team-sf
        </Typography>
      <div className={classes.messagge}>
        <ListMessagge />
      </div>
      <div className={classes.comment}>
        <CommentBox />
      </div>
    </div>
  )
}

export default IndexPage