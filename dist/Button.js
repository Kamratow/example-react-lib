import React from 'react';
import './Button.css';

const button = props => React.createElement("button", {
  className: "btn-primary"
}, "Click me!");

export default button;