import React, { Component } from 'react';
import Quote from './components/QuoteText';
import Button from './components/Button';
import SocialMedia from './components/Social_Media';
import quotesCollection from './api/quoteCollection';
import { shuffle, shuffleBgColors } from './helpers/helperFunctions';
import styles from './scss/QuoteBox.module.scss';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      platform: ['twitter', 'tumblr'],
      color: null,
      visibility: false,
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
    const randNums = shuffle(quotesCollection);
    this.setState(prevState => {
      let nextQuote = { quote: randNums[0].quote, author: randNums[0].author };
      const isSameQuote = JSON.stringify(prevState) === JSON.stringify(nextQuote);
      nextQuote = isSameQuote
        ? { quote: randNums[1].quote, author: randNums[1].author }
        : nextQuote;
      return nextQuote;
    });
    // function below from helper functions //
    const bgColor = shuffleBgColors(styles, this.state.color);
    // setting state for fade on button click //
    this.setState({
      color: bgColor,
      visibility: true,
    });
    // resets after the fade has finished //
    setTimeout(() => {
      this.setState({
        color: bgColor,
        visibility: false,
      });
    }, 500);
  }

  render() {
    const classes = this.state.visibility === true ? `${styles.fade}` : null;
    const { quote, author, color, platform } = this.state;
    const [twitter, tumblr] = platform;

    return (
      <React.Fragment>
        <body
          className={`${styles.container} ${styles['bg-purple']} ${styles[`${color}`]} ${classes}`}
        >
          <section className={styles.quoteSection}>
            <div id="quote-box" className={styles.quoteBox}>
              <Quote quote={quote} author={author} />
              <section className={styles.mediaContainer}>
                <div>
                  <SocialMedia platform={twitter} quote={quote} author={author} />
                  <SocialMedia platform={tumblr} quote={quote} author={author} />
                </div>
                <Button click={this.handleClick} theme="light" />
              </section>
            </div>
            <a
              href="https://github.com/ctocco/quote-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={styles.siteAuthorName}>by Claudio Tocco</p>
            </a>
          </section>
        </body>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
