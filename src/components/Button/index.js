import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ click, theme = 'light' }) {
  return (
    <div>
      <button
        type="button"
        onClick={click}
        className={`${styles.btn} ${styles[`btn--${theme}`]}`}
        id="new-quote"
      >
        New Quote
      </button>
    </div>
  );
}

Button.propTypes = {
  click: PropTypes.func,
  theme: PropTypes.string,
};

export default Button;
