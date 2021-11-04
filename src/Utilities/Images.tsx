import { Fragment } from "react";
import classes from "./Images.module.css";

type Img = {
  isFirstImage: boolean;
};

const Images = ({ isFirstImage }: Img) => {
  if (isFirstImage) {
    return (
      <Fragment>
        {/* Mobile */}
        <img
          className={`${classes.mobile} ${classes.keyboard}`}
          src="./assets/mobile/image-keyboard.jpg"
          alt="keyboard"
        />
        {/* Tablet */}
        <img
          className={`${classes.tablet} ${classes.keyboard}`}
          src="./assets/tablet/image-keyboard.jpg"
          alt="keyboard"
        />
        {/* Desktop */}
        <img
          className={`${classes.desktop} ${classes.keyboard}`}
          src="./assets/desktop/image-keyboard.jpg"
          alt="keyboard"
        />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={classes["column-images"]}>
          {/* Mobile */}
          <img
            className={`${classes.mobile} ${classes["glass-and-keyboard"]}`}
            src="./assets/mobile/image-glass-and-keyboard.jpg"
            alt="glass and keyboard"
          />
          {/* Tablet */}
          <img
            className={`${classes.tablet} ${classes["glass-and-keyboard"]}`}
            src="./assets/tablet/image-glass-and-keyboard.jpg"
            alt="glass and keyboard"
          />
          {/* Desktop */}
          <img
            className={`${classes.desktop} ${classes["glass-and-keyboard"]}`}
            src="./assets/desktop/image-glass-and-keyboard.jpg"
            alt="glass and keyboard"
          />
          <div className={classes["image-layer"]}>
            {/* Mobile */}
            <img
              className={`${classes.mobile} ${classes["phone-and-keyboard"]}`}
              src="./assets/mobile/image-phone-and-keyboard.jpg"
              alt="phone and keyboard"
            />
            {/* Tablet */}
            <img
              className={`${classes.tablet} ${classes["phone-and-keyboard"]}`}
              src="./assets/tablet/image-phone-and-keyboard.jpg"
              alt="phone and keyboard"
            />
            {/* Desktop */}
            <img
              className={`${classes.desktop} ${classes["phone-and-keyboard"]}`}
              src="./assets/desktop/image-phone-and-keyboard.jpg"
              alt="phone and keyboard"
            />
            <div className={classes.layer} />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Images;
