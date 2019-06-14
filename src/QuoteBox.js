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
    const bgColor = shuffleBgColors(styles);
    this.setState({
      color: bgColor,
    });
  }

  render() {
    // console.log(Object.keys(styles));
    const { quote, author, color, platform } = this.state;
    const [twitter, tumblr] = platform;
    return (
      <React.Fragment>
        <body className={`${styles.container} ${styles['bg-purple']} ${styles[`${color}`]}`}>
          <section className={styles.quoteSection}>
            <div id="quote-box" className={styles.quoteBox}>
              <Quote quote={quote} author={author} />
              <section className={styles.mediaContainer}>
                <div>
                  <SocialMedia platform={twitter} />
                  <SocialMedia platform={tumblr} />
                </div>
                <Button click={this.handleClick} theme="light" />
              </section>
            </div>
            <p className={styles.siteAuthorName}>by Claudio Tocco</p>
          </section>
        </body>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
