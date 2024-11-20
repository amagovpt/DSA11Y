import React from "react";
import Form from "react-bootstrap/Form";

import "./styles.css";
import classNames from "classnames";

const TextArea = ({ darkTheme, label, type, placeholder, error, id, ...rest }) => {
  const inputClass = classNames("form-control", {
    "is-invalid": error,
  });

  const theme = darkTheme === "dark" ? "dark" : ""

  return (
    <Form.Group className={`field ama ${theme}`}>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        as="textarea"
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputClass}
        {...rest}
      />

      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { TextArea };
