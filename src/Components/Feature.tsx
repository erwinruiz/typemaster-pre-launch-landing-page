import classes from "./Feature.module.css";
import { Feature as FeatureProps } from "../Types/types";

function Feature({ imgUrl, title, text }: FeatureProps) {
  return (
    <div className={classes.feature}>
      <div className={classes["icon-container"]}>
        <img src={imgUrl} alt={title} />
      </div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
}

export default Feature;
