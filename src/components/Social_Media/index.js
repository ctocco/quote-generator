import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMedia.module.scss';

function Share({ platform, quote, author }) {
  const shareOption = isTwitter => {
    return isTwitter === 'twitter'
      ? `https://${platform}.com/intent/tweet/?text=${quote} ${author}`
      : `https://${platform}.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  };

  return (
    <>
      <a
        href={shareOption(platform)}
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
        title={`${platform} Page`}
        className="fab-square ml"
      >
        <i className={`${styles['fab-square']} fab fa-${platform}-square`} />
      </a>
    </>
  );
}

Share.propTypes = {
  platform: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Share;
