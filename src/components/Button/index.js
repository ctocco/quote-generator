import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ click, theme = 'light', color }) {
  const stylesButton = {
    backgroundImage: color,
  };
  return (
    <React.Fragment>
      <button
        type="button"
        onClick={click}
        className={`${styles.btn} ${styles[`btn--${theme}`]} ${stylesButton}`}
        id="new-quote"
      >
        New Quote
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  click: PropTypes.func,
  theme: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
