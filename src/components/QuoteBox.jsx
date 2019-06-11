import React, { Component } from "react";
import Button from "./Button";
import Author from "./Author";
import Share from "./Share";
import Text from "./Text";
import styles from "../scss/QuoteBox.module.scss";
import quotesCollection from "../api/quoteCollection";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      quote: "",
      author: "",
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: quotesCollection[0].id,
      quote: quotesCollection[0].quote,
      author: quotesCollection[0].author
    });
  }

  handleClick() {
    console.log("clicked");
    const generateNumber = () => {
      return ranNum;
    };

    const chooseQuote = num => {
      var numbers = [1];
      let randomNum;
      randomNum = Math.floor(Math.random() * 3 + 1);
      if (numValue.includes(num)) {
        let newNum = generateNumber();
        return this.setState({ num: newNum });
      } else {
        return this.setState({ num: num });
      }
    };
    chooseQuote(generateNumber());
  }
  render() {
    console.log(quotesCollection);
    return (
      <div id="quote-box" className={styles.quoteBox}>
        <Text quote={this.state.quote} />
        <Author author={this.state.author} />
        <Button click={this.handleClick} />
        <Share />
        <Share />
      </div>
    );
  }
}

export default QuoteBox;
