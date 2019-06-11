import React, { Component } from "react";
import Button from "./Button";
import Author from "./Author";
import Share from "./Share";
import Text from "./Text";
import styles from "../scss/QuoteBox.module.scss";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="quote-box" className={styles.quoteBox}>
        <Text />
        <Author />
        <Button />
        <Share />
        <Share />
      </div>
    );
  }
}

export default QuoteBox;
