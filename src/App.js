import React from "react";
import styles from "./scss/App.module.scss";
import QuoteBox from "./components/QuoteBox";

function App() {
  console.log(styles);
  return (
    <div className={styles.body}>
      <section>
        <QuoteBox />
        <h5 className={styles.text}>by Claudio Tocco</h5>
      </section>
    </div>
  );
}

export default App;
