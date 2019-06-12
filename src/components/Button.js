import React from 'react';
import PropTypes from 'prop-types';

function Button({ click }) {
  return (
    <div>
      <button type="button" onClick={click}>
        New Quote
      </button>
    </div>
  );
}

Button.propTypes = {
  click: PropTypes.func,
};

export default Button;
