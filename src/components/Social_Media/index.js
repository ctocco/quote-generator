import React from 'react';
import styles from './SocialMedia.module.scss';

function Share({ platform }) {
  return (
    <React.Fragment>
      <a
        href={`https://www.${platform}.com`}
        target="_blank"
        rel="noopener noreferrer"
        title={`${platform} Page`}
        className="fab-square ml"
      >
        <i className={`${styles['fab-square']} fab fa-${platform}-square`} />
      </a>
    </React.Fragment>
  );
}

export default Share;
