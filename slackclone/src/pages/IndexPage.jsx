import CommentBox from "../components/CommentBox/CommentBox"
import ListMessagge from "../components/Messages/ListMessagge"
import classes from "./IndexPage.module.css"
const IndexPage = () => {
  return (
    <div className={classes.container}>
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