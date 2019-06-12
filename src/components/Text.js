import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/Text.module.scss';

function Text({ quote }) {
  return (
    <div id="text">
      <p className={styles.text}>{quote}</p>
    </div>
  );
}

// Text.defaultProps = {
//   text: 'this is a quote',
// };

Text.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Text;
