import React from 'react';

const Button = (props) => {
  return (
    <input className={props.className} type='button' value={props.label} onClick={props.handleClick}></input>
  )
}
export default Button;