import React from 'react';
import PropTypes from 'prop-types';

function Author({ author }) {
  return (
    <div>
      <p>{author}</p>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Author;
