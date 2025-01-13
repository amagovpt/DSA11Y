import React from "react";
import { Breadcrumb as BBreadcrumb } from "react-bootstrap";

import "./styles.css";

const { Item } = BBreadcrumb;

const Breadcrumb = ({ data, onClick, darkTheme, tagHere, LinkComponent = "a", ...props }) => {

  // Theme
  const theme = darkTheme === "dark" ? "dark" : ""
  
  const size = data.length - 1;
  const handleOnClick = (item) => (e) => {
    if (item.href === "") {
      e.preventDefault();
      if(item.onClick) {
        item.onClick()
      } else {
        onClick(item, e);
      }
    }
  };
  return (
    <BBreadcrumb {...props} className={`ama breadcrumbs ${theme}`} aria-label={tagHere}>
      {data.map((item, index) =>
        item.children ?
          <li
            key={`id-${index}`}
            className={`breadcrumb-item ${index === size ? "active" : ""}`}
            aria-current={index === size ? "page" : undefined}
          >
            {item.children}
          </li>
        :
        <Item
          key={`id-${index}`}
          href={item.href === "" ? "" : item.href}
          active={index === size}
          onClick={handleOnClick(item)}
        >
          {item.title}
        </Item>
      )}
    </BBreadcrumb>
  );
};

export default Breadcrumb;
export { Breadcrumb };
