import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

export function Link({ darkTheme, to, text, children, iconLeft, iconRight, ...rest }) {
  const theme = darkTheme ? "dark" : ""
  return (
    <div className={`${theme} link-container`}>
      {iconLeft && <>{iconLeft}</>}
      <a className="ama-typography-action" href={to} {...rest}>
        {children || <span dangerouslySetInnerHTML={{ __html: text }} />}
      </a>
      {iconRight && <>{iconRight}</>}
    </div>
  );
}

Link.propTypes = {
  darkTheme: PropTypes.bool,
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
};
