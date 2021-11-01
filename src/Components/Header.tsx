import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img src="./assets/shared/logo.svg" alt="logo" />
      <button>Pre-order now</button>
    </header>
  );
}

export default Header;
