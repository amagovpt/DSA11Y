import React from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb as BBreadcrumb } from "react-bootstrap";

import "./styles.css";

const { Item } = BBreadcrumb;

const Breadcrumb = ({ data, onClick, darkTheme, tagHere, ...props }) => {

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
      {data.map((item, index) => (
        <Item
          key={`id-${index}`}
          href={item.href === "" ? "" : item.href}
          active={index === size}
          onClick={handleOnClick(item)}
        >
          {item.title}
        </Item>
      ))}
    </BBreadcrumb>
  );
};

export default Breadcrumb;
export { Breadcrumb };
