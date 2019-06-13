import React, { Component } from 'react';
import Quote from './components/QuoteText';
import Button from './components/Button';
import SocialMedia from './components/Social_Media';
import quotesCollection from './api/quoteCollection';
import shuffle from './helpers/helperFunctions';
import styles from './scss/QuoteBox.module.scss';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      counter: 0,
      platform: ['twitter', 'tumblr'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const randNums = shuffle(quotesCollection);
    this.setState({
      quote: randNums[0].quote,
      author: randNums[0].author,
    });
  }

  handleClick() {
    const { counter } = this.state;
    const randNums = shuffle(quotesCollection);
    this.setState(prevState => {
      let nextQuote = { quote: randNums[0].quote, author: randNums[0].author };
      const isSameQuote = JSON.stringify(prevState) === JSON.stringify(nextQuote);
      nextQuote = isSameQuote
        ? { quote: randNums[1].quote, author: randNums[1].author }
        : nextQuote;
      return nextQuote;
    });
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { quote, author, counter, platform } = this.state;
    const [twitter, tumblr] = platform;

    return (
      <React.Fragment>
        <body className={`${styles.container} ${styles[`body${counter}`]}`}>
          <section className={styles.section}>
            <div id="quote-box" className={styles.quoteBox}>
              <Quote quote={quote} author={author} />
              <section>
                <Button click={this.handleClick} theme="light" />
                <SocialMedia platform={twitter} />
                <SocialMedia platform={tumblr} />
              </section>
            </div>
            <p className={styles.text}>by Claudio Tocco</p>
          </section>
        </body>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
