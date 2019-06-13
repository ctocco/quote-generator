import React from 'react';

function Share({ platform }) {
  return (
    <div>
      <h2>
        <a
          href={`https://www.${platform}.com`}
          target="_blank"
          rel="noopener noreferrer"
          title={`${platform} Page`}
          className=""
        >
          <i className={`fab fa-${platform}-square`} />
        </a>
      </h2>
    </div>
  );
}

export default Share;
