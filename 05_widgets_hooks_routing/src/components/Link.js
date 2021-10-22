import React from 'react';

const Link = ({ className, href, children }) => {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        // changes the URL without reloading
        if (event.metaKey || event.ctrlKey) {
          return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
