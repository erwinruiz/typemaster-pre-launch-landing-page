import classes from "./Home.module.css";

function Home() {
  return (
    <main>
      <section className={classes["first-section"]}>
        <h1 className={classes.title}>Typemaster keyboard</h1>
        <p className={classes.text}>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className={classes["bottom-content"]}>
          <button>Pre-order now</button>
          <p>Release on 5/27</p>
        </div>
        <img
          className={classes.keyboard}
          src="./assets/mobile/image-keyboard.jpg"
          alt="keyboard"
        />
        <div className={classes["column-images"]}>
          <img
            className={classes["glass-and-keyboard"]}
            src="./assets/mobile/image-glass-and-keyboard.jpg"
            alt="glass and keyboard"
          />
          <img
            className={classes["phone-and-keyboard"]}
            src="./assets/mobile/image-phone-and-keyboard.jpg"
            alt="phone and keyboard"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
