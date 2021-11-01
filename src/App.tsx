import classes from "./App.module.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
