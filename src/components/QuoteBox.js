import React, { Component } from 'react';
import Button from './Button';
import Author from './Author';
import Share from './Share';
import Text from './Text';
import styles from '../scss/QuoteBox.module.scss';
import quotesCollection from '../api/quoteCollection';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      quote: quotesCollection[0].quote,
      author: quotesCollection[0].author,
    });
  }

  handleClick() {
    this.setState({
      quote: quotesCollection[1].quote,
      author: quotesCollection[1].author,
    });
  }

  render() {
    const { quote, author } = this.state;

    return (
      <div id="quote-box" className={styles.quoteBox}>
        <Text quote={quote} />
        <Author author={author} />
        <Button click={this.handleClick} />
        <Share />
        <Share />
      </div>
    );
  }
}

export default QuoteBox;
