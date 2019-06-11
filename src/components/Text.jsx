import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  return <div id="text">{props.quote}</div>;
}

Text.defaultProps = {
  text: "this is a quote"
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
