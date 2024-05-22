import { Suspense } from "react";
import CommentBox from "../components/CommentBox/CommentBox"
import ListMessagge from "../components/Messages/ListMessagge"
import { getMessage } from "../lib/api";
import classes from "./IndexPage.module.css"
import Typography from '@mui/material/Typography';
import { Await, defer, useLoaderData } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { messagesActions } from "../store/message-slice";
import MessageSkeleton from "../components/UI/MessageSkeleton";

const IndexPage = () => {
  const data = useLoaderData();
  //const dispatch = useDispatch();

  return (
    <Suspense
      fallback={
        <div className="loading">
          {[1, 2, 3, 4].map(item => <MessageSkeleton key={item} />)}
        </div>
      }
    >
      <div className={classes.container}>
        <Await resolve={data.messages}>
          {(messages) => {
            // dispatch(messagesActions.replaceMessages({ items: messages }))

            return <><Typography
              display={"block"}
              textAlign={"center"}
              variant="caption" gutterBottom>
              desugb-team-sf
            </Typography>
              <div className={classes.messagge}>
                <ListMessagge messages={messages} />
              </div>
            </>
          }}


        </Await>
        <div className={classes.comment}>
          <CommentBox />
        </div>
      </div>
    </Suspense>
  )
}

export async function loader({ params }) {
  return defer({ messages: getMessage(params.id) });
}

export default IndexPage