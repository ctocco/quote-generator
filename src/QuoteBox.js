import React, { Component } from 'react';
import quotesCollection from './api/quoteCollection';
import Quote from './components/QuoteText';
import Button from './components/Button';
import SocialMedia from './components/Social_Media';
import Header from './components/Header';
import { shuffle, shuffleBgColors } from './helpers/helperFunctions';
import styles from './scss/QuoteBox.module.scss';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
      quote: '',
      author: '',
      platform: ['twitter', 'tumblr'],
      color: null,
      visibility: false,
      quoteIndex: 1,
    };
  }

  componentWillMount() {
    const randomisedQuotes = shuffle(quotesCollection);
    this.setState({
      quotes: randomisedQuotes,
      quote: randomisedQuotes[0].quote,
      author: randomisedQuotes[0].author,
    });
  }

  setQuote() {
    // this function will loop through the quotes and once at the end start again //
    const { quoteIndex, quotes } = this.state;
    const newQuote = quotes[quoteIndex % quotes.length];
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });
  }

  handleClick = () => {
    const { quoteIndex } = this.state;
    this.setState({
      quoteIndex: quoteIndex + 1,
    });
    this.setQuote();
    this.shuffleColors();
  };

  shuffleColors() {
    // first parameter is the styles array, second is current color //
    // returns the background color as a string //
    const { color } = this.state;
    const bgColor = shuffleBgColors(styles, color);
    this.setState({
      color: bgColor,
      visibility: true,
    });
    this.fadeBackground();
  }

  fadeBackground() {
    // setting state for fade on button click //
    setTimeout(() => {
      this.setState({
        visibility: false,
      });
    }, 500);
  }

  render() {
    const { quote, author, color, platform, visibility } = this.state;
    const classes = visibility === true ? `${styles.fade}` : null;
    const [twitter, tumblr] = platform;
    return (
      <>
        <main
          className={`${styles.container} ${styles['bg-purple']} ${styles[`${color}`]} ${classes}`}
        >
          <Header />
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
          </section>
        </main>
      </>
    );
  }
}

export default QuoteBox;
