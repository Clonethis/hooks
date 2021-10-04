import React from "react";
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // restoring control (windows) or metakey(mac)
    if (event.metaKey || event.ctrlKey) {
      // opening new tab by ctrl/meta + click
      return;
    }
    // Dissabling full page reload
    event.preventDefault();
    // todo lookup what does it mean
    // updating http property -> special syntax
    window.history.pushState({}, "", href);
    // todo : find what is 'PopStateEvent'
    // communicating to components that url has changed...
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
