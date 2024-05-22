import { Link, useRouteError } from "react-router-dom";
import classes from "./NotFound.module.css";

export default function NotFound() {
    const error = useRouteError();
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{error && error.status} Error page</h1>
      <p className={classes["zoom-area"]}>
         {error ? error.message : "Ha ocurrido un error"}
      </p>
      <section className={classes["error-container"]}>
        <span className={classes["four"]}>
          <span className={classes["screen-reader-text"]}>4</span>
        </span>
        <span className={classes["zero"]}>
          <span className={classes["screen-reader-text"]}>0</span>
        </span>
        <span className={classes["four"]}>
          <span className={classes["screen-reader-text"]}>4</span>
        </span>
      </section>
      <div className={classes["link-container"]}>
        <Link
          to="/"
          className={classes["more-link"]}
        >
         Login
        </Link>
      </div>
    </div>
  );
}
