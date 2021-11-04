import { Fragment } from "react";
import Feature from "./Feature";
import classes from "./Home.module.css";
import features from "../db/features";
import Images from "../Utilities/Images";

function Home() {
  return (
    <Fragment>
      <main>
        <section className={classes["first-section"]}>
          <div className={classes['text-content']}>
            <h1 className={classes.title}>Typemaster keyboard</h1>
            <p className={classes.text}>
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <div className={classes["bottom-content"]}>
              <button>Pre-order now</button>
              <p>Release on 5/27</p>
            </div>
          </div>
          <Images isFirstImage={true} />
        </section>
        <section className={classes["second-section"]}>
          <Images isFirstImage={false} />
          <div className={classes["text-content"]}>
            <h2 className={classes.title}>Mechanical wireless keyboard</h2>
            <p className={classes.text}>
              The Typemaster keyboard boasts top-notch build and practical
              design. It offers a wide variety of switches and keycaps, along
              with reliable wireless connectivity.
            </p>
          </div>
        </section>
        <section className={classes["third-section"]}>
          <div className={classes["features-container"]}>
            {features.map((feature, i) => (
              <Feature
                key={i}
                imgUrl={feature.imgUrl}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className={classes.footer}>
        <p>
          Typemaster 2021 | <span>All Rights Reserved</span>
        </p>
      </footer>
    </Fragment>
  );
}

export default Home;
