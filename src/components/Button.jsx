import React from "react";

const Button = props => {
  const {onClick, className} = props;
  return (
    <button type="button" className={className} onClick={onClick}>Sortear</button>
  )
}

export default React.memo(Button);