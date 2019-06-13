import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuoteText.module.scss';

function Text({ quote, author }) {
  return (
    <div id="text" className={styles.text}>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <p>-{author}</p>
    </div>
  );
}

// Text.defaultProps = {
//   text: 'this is a quote',
// };

Text.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Text;
