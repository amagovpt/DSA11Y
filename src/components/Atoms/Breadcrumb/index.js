import React from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb as BBreadcrumb } from "react-bootstrap";

import "./styles.css";

const { Item } = BBreadcrumb;

const Breadcrumb = ({ data, onClick, darkTheme, tagHere, ...props }) => {

  // Theme
  const theme = darkTheme === "light" ? "" : "dark"
  
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
    <div className={`breadcrumbs ${theme}`}>
      <BBreadcrumb {...props}>
        {data.map((item, index) => (
          <Item
            key={`id-${index}`}
            href={item.href === "" ? "" : item.href}
            active={index === size}
            onClick={handleOnClick(item)}
            aria-label={index === size ? tagHere : undefined}
          >
            {item.title}
          </Item>
        ))}
      </BBreadcrumb>
    </div>
  );
};

export default Breadcrumb;
export { Breadcrumb };
